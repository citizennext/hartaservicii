import { describe, expect, test, vi } from 'vitest';
import { handleContact, parseContactForm, sendWithResend, verifyTurnstile, type ContactDeps } from './contact';

const form = (fields: Record<string, string>) => {
  const data = new FormData();
  for (const [key, value] of Object.entries(fields)) data.set(key, value);
  return data;
};

const VALID = {
  email: 'ana@example.ro',
  message: 'Bună ziua, datele centrului s-au schimbat.',
  'cf-turnstile-response': 'token',
};

const deps = (overrides: Partial<ContactDeps> = {}): ContactDeps => ({
  verifyTurnstile: vi.fn().mockResolvedValue(true),
  sendEmail: vi.fn().mockResolvedValue(undefined),
  ...overrides,
});

describe('parseContactForm', () => {
  test('accepts a valid submission and trims values', () => {
    const result = parseContactForm(form({ ...VALID, email: '  ana@example.ro ' }));
    expect(result).toEqual({
      success: true,
      data: { email: 'ana@example.ro', message: VALID.message, token: 'token', isBot: false },
    });
  });

  test('rejects an invalid email with a Romanian message', () => {
    const result = parseContactForm(form({ ...VALID, email: 'nu-e-email' }));
    expect(result).toEqual({ success: false, error: 'Adresa de email nu este validă.' });
  });

  test('rejects messages that are too short or too long', () => {
    expect(parseContactForm(form({ ...VALID, message: 'hi' })).success).toBe(false);
    expect(parseContactForm(form({ ...VALID, message: 'a'.repeat(5001) })).success).toBe(false);
  });

  test('requires the Turnstile token', () => {
    const withoutToken = Object.fromEntries(Object.entries(VALID).filter(([key]) => key !== 'cf-turnstile-response'));
    expect(parseContactForm(form(withoutToken))).toEqual({ success: false, error: 'Te rugăm să confirmi că nu ești robot.' });
  });

  test('flags submissions that fill the honeypot field', () => {
    const result = parseContactForm(form({ ...VALID, website: 'http://spam.example' }));
    expect(result.success && result.data.isBot).toBe(true);
  });
});

describe('handleContact', () => {
  test('verifies Turnstile then sends the email', async () => {
    const d = deps();
    const result = await handleContact(form(VALID), '203.0.113.7', d);

    expect(result).toEqual({ success: true, error: null });
    expect(d.verifyTurnstile).toHaveBeenCalledWith('token', '203.0.113.7');
    expect(d.sendEmail).toHaveBeenCalledWith({ replyTo: 'ana@example.ro', message: VALID.message });
  });

  test('pretends to succeed for honeypot bots without sending', async () => {
    const d = deps();
    const result = await handleContact(form({ ...VALID, website: 'x' }), null, d);
    expect(result.success).toBe(true);
    expect(d.sendEmail).not.toHaveBeenCalled();
  });

  test('rejects failed Turnstile verification', async () => {
    const d = deps({ verifyTurnstile: vi.fn().mockResolvedValue(false) });
    const result = await handleContact(form(VALID), null, d);
    expect(result).toEqual({ success: false, error: 'Verificarea anti-spam a eșuat. Reîncearcă.', status: 400 });
    expect(d.sendEmail).not.toHaveBeenCalled();
  });

  test('returns a friendly error when sending fails', async () => {
    const d = deps({ sendEmail: vi.fn().mockRejectedValue(new Error('Resend 500')) });
    const result = await handleContact(form(VALID), null, d);
    expect(result).toEqual({
      success: false,
      error: `Mesajul nu a putut fi trimis. Încearcă din nou sau scrie-ne la contact@serviciisociale.ro.`,
      status: 502,
    });
  });
});

describe('verifyTurnstile', () => {
  test('posts secret, token and IP to siteverify and returns success', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ success: true })));

    const ok = await verifyTurnstile({ secret: 's3cret', fetch: fetchMock })('tok', '203.0.113.7');

    expect(ok).toBe(true);
    const [url, init] = fetchMock.mock.calls[0]!;
    expect(url).toBe('https://challenges.cloudflare.com/turnstile/v0/siteverify');
    const body = init.body as FormData;
    expect([body.get('secret'), body.get('response'), body.get('remoteip')]).toEqual(['s3cret', 'tok', '203.0.113.7']);
  });

  test('returns false on HTTP errors', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('nope', { status: 500 }));
    expect(await verifyTurnstile({ secret: 's', fetch: fetchMock })('tok', null)).toBe(false);
  });
});

describe('sendWithResend', () => {
  test('sends a plain-text email with reply-to set to the visitor', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: '1' })));
    const send = sendWithResend({
      apiKey: 're_key',
      from: 'Harta <noreply@serviciisociale.ro>',
      to: 'contact@serviciisociale.ro',
      fetch: fetchMock,
    });

    await send({ replyTo: 'ana@example.ro', message: 'Salut' });

    const [url, init] = fetchMock.mock.calls[0]!;
    expect(url).toBe('https://api.resend.com/emails');
    expect(init.headers.authorization).toBe('Bearer re_key');
    expect(JSON.parse(init.body)).toEqual({
      from: 'Harta <noreply@serviciisociale.ro>',
      to: ['contact@serviciisociale.ro'],
      reply_to: 'ana@example.ro',
      subject: 'Mesaj nou de pe serviciisociale.ro',
      text: 'De la: ana@example.ro\n\nSalut',
    });
  });

  test('throws with the status when Resend rejects the request', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('{"message":"invalid"}', { status: 422 }));
    const send = sendWithResend({ apiKey: 'k', from: 'a@b.ro', to: 'c@d.ro', fetch: fetchMock });
    await expect(send({ replyTo: 'x@y.ro', message: 'hey there' })).rejects.toThrow(/422/);
  });
});
