/**
 * Rebuilds the Algolia index from Hasura. Run after a successful build:
 *   pnpm index:algolia            # replace the index atomically
 *   pnpm index:algolia --dry-run  # fetch + map only, print a summary
 */
import { algoliasearch } from 'algoliasearch';
import { createHasuraClient } from '../src/lib/hasura/client';
import { fetchBlogs, fetchPages } from '../src/lib/hasura/cms';
import { fetchProviders } from '../src/lib/hasura/providers';
import { toSearchRecords } from '../src/lib/search';

const REQUIRED_ENV = ['HASURA_URL', 'HASURA_ADMIN_SECRET', 'PUBLIC_ALGOLIA_APP_ID', 'PUBLIC_ALGOLIA_INDEX_NAME_COMMON'] as const;
const BATCH_SIZE = 1000;

function readEnv(isDryRun: boolean): Record<(typeof REQUIRED_ENV)[number] | 'ALGOLIA_API_KEY', string> {
  const names = isDryRun ? REQUIRED_ENV : [...REQUIRED_ENV, 'ALGOLIA_API_KEY' as const];
  const missing = names.filter((name) => !process.env[name]);
  if (missing.length) throw new Error(`Missing environment variables: ${missing.join(', ')}`);
  return Object.fromEntries([...names, 'ALGOLIA_API_KEY'].map((name) => [name, process.env[name] ?? ''])) as ReturnType<
    typeof readEnv
  >;
}

async function main(): Promise<void> {
  const isDryRun = process.argv.includes('--dry-run');
  const env = readEnv(isDryRun);
  const hasura = createHasuraClient({ url: env.HASURA_URL, adminSecret: env.HASURA_ADMIN_SECRET });

  const [providers, blogs, pages] = await Promise.all([fetchProviders(hasura), fetchBlogs(hasura), fetchPages(hasura)]);
  const records = toSearchRecords({ providers, blogs, pages });
  const largest = Math.max(...records.map((record) => Buffer.byteLength(JSON.stringify(record))));
  console.warn(
    `Prepared ${records.length} records (${blogs.length} news, ${pages.length} pages, ${providers.length} services); largest ${largest} bytes.`
  );

  if (isDryRun) {
    console.warn('Dry run: index not modified.');
    return;
  }

  const algolia = algoliasearch(env.PUBLIC_ALGOLIA_APP_ID, env.ALGOLIA_API_KEY);
  await algolia.replaceAllObjects({
    indexName: env.PUBLIC_ALGOLIA_INDEX_NAME_COMMON,
    objects: [...records],
    batchSize: BATCH_SIZE,
  });
  console.warn(`Replaced index "${env.PUBLIC_ALGOLIA_INDEX_NAME_COMMON}".`);
}

main().catch((error: unknown) => {
  console.error('Algolia indexing failed:', error instanceof Error ? error.message : error);
  process.exit(1);
});
