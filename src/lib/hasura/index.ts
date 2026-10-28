import { HASURA_ADMIN_SECRET, HASURA_URL } from 'astro:env/server';
import { createHasuraClient, type HasuraClient } from './client';

export { fetchBlogs, fetchPages, withNeighbours, type Blog, type Page } from './cms';
export { fetchProviders, fetchSuppliers, toMapProvider, type Provider } from './providers';

let client: HasuraClient | undefined;

/** Build-time only: the admin secret must never be imported from client-side code. */
export function getHasuraClient(): HasuraClient {
  client ??= createHasuraClient({ url: HASURA_URL, adminSecret: HASURA_ADMIN_SECRET });
  return client;
}
