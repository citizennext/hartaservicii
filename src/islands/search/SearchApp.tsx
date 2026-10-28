import { PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_INDEX_NAME_COMMON, PUBLIC_ALGOLIA_SEARCH_KEY } from 'astro:env/client';
import { liteClient } from 'algoliasearch/lite';
import type { Hit } from 'instantsearch.js';
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  Menu,
  Pagination,
  PoweredBy,
  RefinementList,
  SearchBox,
} from 'react-instantsearch';
import { hitPath, type SearchRecord } from '../../lib/search';

const searchClient = liteClient(PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_SEARCH_KEY);
const HITS_PER_PAGE = 10;

function SearchHit({ hit }: { hit: Hit<SearchRecord> }) {
  return (
    <div className={`card-${hit.type.toLowerCase()}`}>
      <div className="hit-name">
        {hit.type === 'Servicii' ? <Highlight attribute="name" hit={hit} /> : <Highlight attribute="title" hit={hit} />}
      </div>
      <div className="hit-summary">{hit.type === 'Servicii' ? hit.supplier.name : hit.summary}</div>
      <a href={hitPath(hit)} className="btn btn-tight w-1/4 hover:text-white">
        Detalii
      </a>
    </div>
  );
}

function Panel({ header, children }: { header: string; children: React.ReactNode }) {
  return (
    <div className="ais-Panel">
      <div className="ais-Panel-header">{header}</div>
      <div className="ais-Panel-body">{children}</div>
    </div>
  );
}

export default function SearchApp() {
  const query = new URLSearchParams(window.location.search).get('query') ?? '';
  return (
    <div className="ais-InstantSearch">
      <InstantSearch
        searchClient={searchClient}
        indexName={PUBLIC_ALGOLIA_INDEX_NAME_COMMON}
        initialUiState={{ [PUBLIC_ALGOLIA_INDEX_NAME_COMMON]: { query, menu: { type: 'Servicii' } } }}
        future={{ preserveSharedStateOnUnmount: true }}>
        <Configure hitsPerPage={HITS_PER_PAGE} />
        <div className="search-header">
          <SearchBox placeholder="Caută aici..." autoFocus={!query} />
          <PoweredBy />
        </div>
        <div className="search-result-wrapper">
          <Menu attribute="type" />
          <div className="left-panel">
            <Hits hitComponent={SearchHit} />
          </div>
          <div className="right-panel">
            <div className="filter location">
              <Panel header="Oraș">
                <RefinementList attribute="location" />
              </Panel>
            </div>
            <div className="filter district">
              <Panel header="Județ">
                <RefinementList attribute="district" />
              </Panel>
            </div>
          </div>
          <Pagination />
        </div>
      </InstantSearch>
    </div>
  );
}
