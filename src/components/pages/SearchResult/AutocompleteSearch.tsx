import React from 'react';
import algoliasearch from 'algoliasearch';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import Autocomplete from './Autocomplete';

const indexCommon = process.env.GATSBY_ALGOLIA_INDEX_NAME_COMMON;
// @ts-ignore
const client = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);

export function AutocompleteSearch() {
  return (
    <InstantSearch indexName={`${indexCommon}`} searchClient={client}>
      <Configure hitsPerPage={6} />
      <Autocomplete />
    </InstantSearch>
  );
}
