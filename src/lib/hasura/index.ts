import { HASURA_ADMIN_SECRET, HASURA_URL } from 'astro:env/server';
import { createHasuraClient, type HasuraClient } from './client';
import { fetchBlogs, fetchPages, type Blog, type Page } from './cms';
import { computeStatistics, type Statistics } from '../statistics';
import { fetchProviders, fetchSuppliers, toStatsProvider, type Provider, type SupplierSummary } from './providers';

export { withNeighbours, type Blog, type Page } from './cms';
export { toMapProvider, type Provider, type SupplierSummary } from './providers';

let client: HasuraClient | undefined;

/** Build-time only: the admin secret must never be imported from client-side code. */
export function getHasuraClient(): HasuraClient {
  client ??= createHasuraClient({ url: HASURA_URL, adminSecret: HASURA_ADMIN_SECRET });
  return client;
}

/** Each dataset is fetched once per build and shared by every page that needs it. */
function once<T>(load: (client: HasuraClient) => Promise<T>): () => Promise<T> {
  let cached: Promise<T> | undefined;
  return () => (cached ??= load(getHasuraClient()));
}

export const getProviders: () => Promise<Provider[]> = once(fetchProviders);
export const getSuppliers: () => Promise<SupplierSummary[]> = once(fetchSuppliers);
export const getBlogs: () => Promise<Blog[]> = once(fetchBlogs);
export const getPages: () => Promise<Page[]> = once(fetchPages);

export const getStatistics: () => Promise<Statistics> = once(async () => {
  const [providers, suppliers] = await Promise.all([getProviders(), getSuppliers()]);
  return computeStatistics(providers.map(toStatsProvider), suppliers);
});
