import React from 'react';
import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-dom';
import Autocomplete from './Autocomplete';

const indexCommon = process.env.GATSBY_ALGOLIA_INDEX_NAME_COMMON;
// @ts-ignore
const client = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);
const common = client.initIndex(indexCommon);

common.setSettings({
  searchableAttributes: ['name', 'location', 'district', 'address', 'supplier.name', 'service.name'],
});

export function AutocompleteSearch() {
  return (
    <InstantSearch indexName={`${indexCommon}`} searchClient={client}>
      <Autocomplete />
    </InstantSearch>
  );
}
