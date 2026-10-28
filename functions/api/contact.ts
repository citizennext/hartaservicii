/// <reference types="@cloudflare/workers-types" />
import { handleContact, sendWithResend, verifyTurnstile } from '../../src/lib/contact';

interface Env {
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

const DEFAULT_TO = 'contact@serviciisociale.ro';
const DEFAULT_FROM = 'Harta Serviciilor Sociale <noreply@serviciisociale.ro>';
const CONFIG_ERROR = 'Formularul de contact nu este configurat momentan. Scrie-ne la contact@serviciisociale.ro.';

const wantsJson = (request: Request) => request.headers.get('accept')?.includes('application/json') ?? false;

/** Without JavaScript the form posts natively: send the visitor back to /contact with a status. */
function respond(request: Request, body: { success: boolean; error: string | null }, status: number): Response {
  if (wantsJson(request)) return Response.json(body, { status });
  const target = new URL('/contact', request.url);
  target.searchParams.set('trimis', body.success ? 'da' : 'nu');
  return Response.redirect(target.toString(), 303);
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.RESEND_API_KEY || !env.TURNSTILE_SECRET_KEY) {
    console.error('Contact form is missing RESEND_API_KEY or TURNSTILE_SECRET_KEY');
    return respond(request, { success: false, error: CONFIG_ERROR }, 503);
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return respond(request, { success: false, error: 'Cerere invalidă.' }, 400);
  }

  const result = await handleContact(data, request.headers.get('cf-connecting-ip'), {
    verifyTurnstile: verifyTurnstile({ secret: env.TURNSTILE_SECRET_KEY }),
    sendEmail: sendWithResend({
      apiKey: env.RESEND_API_KEY,
      from: env.CONTACT_FROM ?? DEFAULT_FROM,
      to: env.CONTACT_TO ?? DEFAULT_TO,
    }),
  });

  return result.success
    ? respond(request, { success: true, error: null }, 200)
    : respond(request, { success: false, error: result.error }, result.status);
};
