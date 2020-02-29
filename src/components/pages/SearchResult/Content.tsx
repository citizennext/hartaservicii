import React from 'react';
import { Link } from 'gatsby';
import getSlug from 'speakingurl';

import { Configure, Hits, InstantSearch, Menu, Pagination, RefinementList, SearchBox, Panel } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';

const indexCommon = process.env.GATSBY_ALGOLIA_INDEX_NAME_COMMON;
// @ts-ignore
const client = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);
const common = client.initIndex(indexCommon);

common.setSettings({
  searchableAttributes: ['name', 'location', 'district', 'address', 'supplier.name', 'service.name'],
  customRanking: ['asc(name)'],
  attributesForFaceting: ['name', 'location', 'district', 'type'],
});

export function InstaSearchPage(props: any) {
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName={`${indexCommon}`} searchClient={client}>
        <div className="search-header">
          <SearchBox
            defaultRefinement={props?.location?.state?.searchValue || ''}
            translations={{
              placeholder: 'Cauta aici...',
            }}
          />
        </div>
        <div className="search-result-wrapper">
          <Menu attribute="type" />
          <div className="left-panel">
            <Hits hitComponent={Hit} />
            <Pagination />
            <Configure hitsPerPage={10} />
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
        </div>
      </InstantSearch>
    </div>
  );
}

function Hit(props: any) {
  const typeFy = props.hit.type.toLowerCase();
  return (
    <div className={`card-${typeFy}`}>
      <div className="hit-name">
        {typeFy === 'servicii' && props.hit.name}
        {typeFy !== 'servicii' && props.hit.title}
      </div>
      <div className="hit-summary">
        {typeFy === 'servicii' && props.hit.supplier.name}
        {typeFy !== 'servicii' && props.hit.summary}
      </div>
      <Link
        to={
          typeFy === 'servicii'
            ? `/harta/serviciu/${getSlug(props.hit.name)}/${props.hit.id}`
            : typeFy === 'noutăți'
            ? `/noutati/${props.hit.slug}`
            : `/${props.hit.slug}`
        }
        className="button small invert">
        Detalii
      </Link>
    </div>
  );
}
