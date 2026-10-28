import type { APIRoute } from 'astro';
import { fetchProviders, getHasuraClient, toMapProvider } from '../../lib/hasura';

/** Slim provider list for the map island; generated once at build time. */
export const GET: APIRoute = async () => {
  const providers = await fetchProviders(getHasuraClient());
  return new Response(JSON.stringify(providers.map(toMapProvider)), {
    headers: { 'content-type': 'application/json' },
  });
};
