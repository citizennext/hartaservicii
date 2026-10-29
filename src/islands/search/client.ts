import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_SEARCH_KEY } from 'astro:env/client';
import { liteClient } from 'algoliasearch/lite';

export const searchClient = liteClient(PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_SEARCH_KEY);

type SearchArgs = Parameters<typeof searchClient.search>;

// A request carries its query directly or inside params (an object or a URL-encoded string).
type LooseRequest = { query?: string; params?: string | { query?: string } };
const queryOf = ({ query, params }: LooseRequest): string | null | undefined =>
  query || (typeof params === 'string' ? new URLSearchParams(params).get('query') : params?.query);

const emptyResult = {
  hits: [],
  nbHits: 0,
  nbPages: 0,
  page: 0,
  hitsPerPage: 0,
  processingTimeMS: 0,
  exhaustiveNbHits: false,
  query: '',
  params: '',
};

/**
 * For type-ahead boxes: InstantSearch searches on mount with an empty query; skip those
 * requests so a page view doesn't cost an Algolia operation until someone types.
 */
export const typeaheadClient: typeof searchClient = {
  ...searchClient,
  search(...args: SearchArgs) {
    const [requests] = args;
    const queries = Array.isArray(requests) ? requests : requests.requests;
    const isEmpty = queries.every((request) => !queryOf(request as LooseRequest));
    if (isEmpty) return Promise.resolve({ results: queries.map(() => emptyResult) }) as ReturnType<typeof searchClient.search>;
    return searchClient.search(...args);
  },
};
