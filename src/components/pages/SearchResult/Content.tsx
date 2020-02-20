import React from 'react';
// Update the import
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  Stats,
} from 'react-instantsearch-dom';
// for the default version
import algoliasearch from 'algoliasearch';

const indexProviders: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_PROVIDERS}`;
// const indexPages: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_PAGES}`;
// const indexBlog: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_BLOG}`;

const client = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_API_KEY}`);
const providers = client.initIndex(indexProviders);
// const pages = client.initIndex(indexPages);
// const blog = client.initIndex(indexBlog);

providers
  .setSettings({
    searchableAttributes: ['name', 'location', 'district', 'address', 'unordered(service)'],
    customRanking: ['desc(popularity)'],
    attributesForFaceting: ['searchable(name)', 'location', 'district', 'service'],
  })
  .then(() => {
    // done
  });

// Update the App component
export default class App extends React.Component {
  // const client = algoliasearch('YourApplicationID', 'YourAdminAPIKey');
  // const index = client.initIndex('your_index_name');

  Hit(props: any) {
    return (
      <li className="item">
        <div className="hit-name">
          <Highlight attribute="name" hit={props.hit} />
        </div>
        <div className="hit-location">
          <Highlight attribute="location" hit={props.hit} />,
          <Highlight attribute="district" hit={props.hit} />
        </div>
        <div className="hit-location">
          <Highlight attribute="location" hit={props.hit} />
        </div>
      </li>
    );
  }

  render() {
    return (
      <div className="ais-InstantSearch">
        <InstantSearch indexName={`${indexProviders}`} searchClient={client}>
          <div className="seacrh-header">
            <SearchBox />
            <div id="stats" className="text-right text-muted">
              <Stats />
            </div>
          </div>
          <div className="left-panel">
            <ul className="items">
              <Hits hitComponent={this.Hit} />
            </ul>
            <Pagination />
          </div>
          <div className="right-panel">
            <ClearRefinements />
            <div className="filter location">
              <h2>Location</h2>
              <RefinementList attribute="location" />
            </div>
            <div className="filter location">
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
