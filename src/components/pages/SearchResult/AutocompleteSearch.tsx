import React from 'react';
import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-dom';
import Autocomplete from './Autocomplete';

const indexCommon: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_COMMON}`;
const client = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_API_KEY}`);
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
