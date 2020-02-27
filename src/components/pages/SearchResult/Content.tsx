import React from 'react';
import { Link } from 'gatsby';
import getSlug from 'speakingurl';

import {
  ClearRefinements,
  Configure,
  Hits,
  InstantSearch,
  Menu,
  Pagination,
  RefinementList,
  SearchBox,
  Stats,
  Panel,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';

const indexCommon: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_COMMON}`;
const client = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_API_KEY}`);
const common = client.initIndex(indexCommon);

common.setSettings({
  searchableAttributes: ['name', 'location', 'district', 'address', 'supplier.name', 'service.name'],
  customRanking: ['asc(name)'],
  attributesForFaceting: ['name', 'location', 'district', 'type'],
});

export function InstaSearchPage() {
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName={`${indexCommon}`} searchClient={client}>
        <div className="search-header">
          <SearchBox
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
            <div id="stats" className="text-right text-muted">
              <Stats />
            </div>
            <ClearRefinements />
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
