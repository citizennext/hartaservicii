import { afterEach, describe, expect, test, vi } from 'vitest';
import { onRequestPost } from './contact';

const ENV = { RESEND_API_KEY: 're_key', TURNSTILE_SECRET_KEY: 'ts_secret' };

function post(fields: Record<string, string>, accept = 'application/json') {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) body.set(key, value);
  return new Request('https://serviciisociale.ro/api/contact', { method: 'POST', body, headers: { accept } });
}

const VALID = { email: 'ana@example.ro', message: 'Datele centrului s-au schimbat.', 'cf-turnstile-response': 'tok' };

// Only request/env are used by the handler.
const call = (request: Request, env: Record<string, string> = ENV) =>
  onRequestPost({ request, env } as unknown as Parameters<typeof onRequestPost>[0]) as Promise<Response>;

function mockUpstream({ turnstile = true, resendStatus = 200 } = {}) {
  return vi.spyOn(globalThis, 'fetch').mockImplementation(async (input) => {
    const url = String(input instanceof Request ? input.url : input);
    if (url.includes('turnstile')) return new Response(JSON.stringify({ success: turnstile }));
    return new Response('{}', { status: resendStatus });
  });
}

afterEach(() => vi.restoreAllMocks());

describe('POST /api/contact', () => {
  test('returns JSON success for script submissions', async () => {
    const fetchSpy = mockUpstream();
    const response = await call(post(VALID));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: true, error: null });
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  test('redirects back to /contact for native form posts', async () => {
    mockUpstream();
    const response = await call(post(VALID, 'text/html'));
    expect(response.status).toBe(303);
    expect(response.headers.get('location')).toBe('https://serviciisociale.ro/contact?trimis=da');
  });

  test('reports validation errors with 400', async () => {
    mockUpstream();
    const response = await call(post({ ...VALID, email: 'bad' }));
    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toBe('Adresa de email nu este validă.');
  });

  test('returns 503 without calling upstream when secrets are missing', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const fetchSpy = mockUpstream();
    const response = await call(post(VALID), {});
    expect(response.status).toBe(503);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  test('maps email delivery failures to 502', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    mockUpstream({ resendStatus: 500 });
    const response = await call(post(VALID));
    expect(response.status).toBe(502);
  });
});
