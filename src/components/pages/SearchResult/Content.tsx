import React from 'react';
import {
  InstantSearch,
  Hits,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  Stats,
  Index,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import AutoComplete from './AutoComplete';

const indexProviders: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_PROVIDERS}`;
const indexPages: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_PAGES}`;
const indexBlog: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_BLOG}`;

const client = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_API_KEY}`);

export default class App extends React.Component {
  hitProviders(props: any) {
    const { supplier } = props.hit;
    return (
      <>
        <div className="hit-name">
          <strong>Name: </strong>
          <Highlight attribute="name" hit={props.hit} />
        </div>
        <div className="hit-location">
          <strong>Location / District: </strong>
          <Highlight attribute="location" hit={props.hit} />, <Highlight attribute="district" hit={props.hit} />
        </div>
        {supplier.name && (
          <div className="hit-supplier">
            <strong>Supplier Name: </strong>
            <span>{supplier.name}</span>
          </div>
        )}
      </>
    );
  }

  hitPagesBlog(props: any) {
    const { summary } = props.hit;
    return (
      <>
        <div className="hit-name">
          <strong>Title: </strong>
          <Highlight attribute="title" hit={props.hit} />
        </div>
        {summary && (
          <div className="hit-summary">
            <strong>Summary: </strong>
            <Highlight attribute="summary" hit={props.hit} />
          </div>
        )}
      </>
    );
  }

  render() {
    return (
      <div className="ais-InstantSearch">
        <InstantSearch indexName={`${indexProviders}`} searchClient={client}>
          <div className="seacrh-header">
            <AutoComplete />
          </div>
          <div className="left-panel">
            <Index indexName={`${indexProviders}`}>
              <div className="providers">
                <Hits hitComponent={this.hitProviders} />
              </div>
              <Pagination />
            </Index>
            <Index indexName={`${indexPages}`}>
              <div className="pages">
                <Hits hitComponent={this.hitPagesBlog} />
              </div>
              <Pagination />
            </Index>
            <Index indexName={`${indexBlog}`}>
              <div className="blog">
                <Hits hitComponent={this.hitPagesBlog} />
              </div>
              <Pagination />
            </Index>
          </div>
          <div className="right-panel">
            <div id="stats" className="text-right text-muted">
              <Stats />
            </div>
            <ClearRefinements />
            <div className="filter location">
              <h2>Location</h2>
              <RefinementList attribute="location" />
            </div>
            <div className="filter district">
              <h2>District</h2>
              <RefinementList attribute="district" />
            </div>
            <Configure hitsPerPage={10} />
          </div>
        </InstantSearch>
      </div>
    );
  }
}
