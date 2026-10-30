import { z } from 'zod';

// Shared by the /api/contact Pages Function; kept free of platform APIs so it is unit-testable.

export interface ContactSubmission {
  email: string;
  message: string;
  token: string;
  /** True when the hidden honeypot field was filled in. */
  isBot: boolean;
}

export type ParseResult = { success: true; data: ContactSubmission } | { success: false; error: string };

export type ContactResult = { success: true; error: null } | { success: false; error: string; status: number };

export interface OutgoingMessage {
  replyTo: string;
  message: string;
}

export interface ContactDeps {
  verifyTurnstile: (token: string, ip: string | null) => Promise<boolean>;
  sendEmail: (message: OutgoingMessage) => Promise<void>;
}

const CONTACT_EMAIL = 'contact@serviciisociale.ro';
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 5000;
export const HONEYPOT_FIELD = 'website';
export const TURNSTILE_FIELD = 'cf-turnstile-response';

const ERRORS = {
  email: 'Adresa de email nu este validă.',
  messageLength: `Mesajul trebuie să aibă între ${MESSAGE_MIN} și ${MESSAGE_MAX} de caractere.`,
  token: 'Te rugăm să confirmi că nu ești robot.',
  turnstile: 'Verificarea anti-spam a eșuat. Reîncearcă.',
  send: `Mesajul nu a putut fi trimis. Încearcă din nou sau scrie-ne la ${CONTACT_EMAIL}.`,
} as const;

const SUBMISSION_SCHEMA = z.object({
  email: z
    .string()
    .trim()
    .pipe(z.email({ error: ERRORS.email })),
  message: z.string().trim().min(MESSAGE_MIN, { error: ERRORS.messageLength }).max(MESSAGE_MAX, { error: ERRORS.messageLength }),
  token: z.string().min(1, { error: ERRORS.token }),
});

const field = (data: FormData, name: string): string => {
  const value = data.get(name);
  return typeof value === 'string' ? value : '';
};

export function parseContactForm(data: FormData): ParseResult {
  const parsed = SUBMISSION_SCHEMA.safeParse({
    email: field(data, 'email'),
    message: field(data, 'message'),
    token: field(data, TURNSTILE_FIELD),
  });
  if (!parsed.success) return { success: false, error: parsed.error.issues[0]?.message ?? ERRORS.send };
  return { success: true, data: { ...parsed.data, isBot: field(data, HONEYPOT_FIELD) !== '' } };
}

export async function handleContact(data: FormData, ip: string | null, deps: ContactDeps): Promise<ContactResult> {
  const parsed = parseContactForm(data);
  if (!parsed.success) return { success: false, error: parsed.error, status: 400 };

  const { email, message, token, isBot } = parsed.data;
  // Don't tell bots they were caught.
  if (isBot) return { success: true, error: null };

  if (!(await deps.verifyTurnstile(token, ip))) return { success: false, error: ERRORS.turnstile, status: 400 };

  try {
    await deps.sendEmail({ replyTo: email, message });
  } catch (error) {
    console.error('Contact form email failed', error);
    return { success: false, error: ERRORS.send, status: 502 };
  }
  return { success: true, error: null };
}

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export function verifyTurnstile({ secret, fetch: fetchImpl = fetch }: { secret: string; fetch?: typeof fetch }) {
  return async (token: string, ip: string | null): Promise<boolean> => {
    const body = new FormData();
    body.set('secret', secret);
    body.set('response', token);
    if (ip) body.set('remoteip', ip);
    const response = await fetchImpl(TURNSTILE_VERIFY_URL, { method: 'POST', body });
    if (!response.ok) {
      console.error('Turnstile siteverify failed', response.status);
      return false;
    }
    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  };
}

const RESEND_URL = 'https://api.resend.com/emails';
const SUBJECT = 'Mesaj nou de pe serviciisociale.ro';

export function sendWithResend({
  apiKey,
  from,
  to,
  fetch: fetchImpl = fetch,
}: {
  apiKey: string;
  from: string;
  to: string;
  fetch?: typeof fetch;
}) {
  return async ({ replyTo, message }: OutgoingMessage): Promise<void> => {
    const response = await fetchImpl(RESEND_URL, {
      method: 'POST',
      headers: { authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject: SUBJECT, text: `De la: ${replyTo}\n\n${message}` }),
    });
    if (!response.ok) throw new Error(`Resend responded with HTTP ${response.status}: ${await response.text()}`);
  };
}
