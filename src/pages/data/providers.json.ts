import type { APIRoute } from 'astro';
import { getProviders, toMapProvider } from '../../lib/hasura';

/** Slim provider list for the map island; generated once at build time. */
export const GET: APIRoute = async () => {
  const providers = await getProviders();
  return new Response(JSON.stringify(providers.map(toMapProvider)), {
    headers: { 'content-type': 'application/json' },
  });
};
