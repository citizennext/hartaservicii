import React from 'react';
import { Link } from 'gatsby';
// @ts-ignore
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import {
  ClearRefinements,
  Configure,
  Highlight,
  Hits,
  Index,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
  Stats,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';

const indexProviders: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_PROVIDERS}`;
const indexPages: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_PAGES}`;
const indexBlog: string | undefined = `${process.env.ALGOLIA_INDEX_NAME_BLOG}`;

const client = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_API_KEY}`);
const providers = client.initIndex(indexProviders);
const pages = client.initIndex(indexPages);
const blog = client.initIndex(indexBlog);

providers
  .setSettings({
    searchableAttributes: ['name', 'location', 'district', 'address', 'supplier.name', 'service.name'],
    customRanking: ['asc(name)'],
    attributesForFaceting: ['name', 'location', 'district', 'service.name'],
  })
  .then(() => {
    // console.log('--- then why ---');
  });

pages
  .setSettings({
    searchableAttributes: ['title', 'summary'],
    customRanking: ['asc(name)'],
  })
  .then(() => {
    // console.log('--- then why ---');
  });

blog
  .setSettings({
    searchableAttributes: ['title', 'summary'],
    customRanking: ['asc(name)'],
  })
  .then(() => {
    // console.log('--- then why ---');
  });

// Update the App component
export default class App extends React.Component {
  hitProviders(props: any) {
    const { supplier } = props.hit;
    return (
      <>
        <div className="hit-name">
          <Highlight attribute="name" hit={props.hit} />
        </div>
        {supplier.name && <div className="hit-summary">{supplier.name}</div>}
        <Link to="/harta" className="button small invert">
          Detalii
        </Link>
      </>
    );
  }

  hitPagesBlog(props: any) {
    const { summary } = props.hit;
    return (
      <>
        <div className="hit-name">
          <Highlight attribute="title" hit={props.hit} />
        </div>
        {summary && (
          <div className="hit-summary">
            <Highlight attribute="summary" hit={props.hit} />
          </div>
        )}
        <Link to="/harta" className="button small invert">
          Detalii
        </Link>
      </>
    );
  }

  getFilters() {
    return (
      <div className="right-panel">
        <div id="stats" className="text-right text-muted">
          <Stats />
        </div>
        <ClearRefinements />
        <div className="filter location">
          <h2>
            <span className="count-filter">121</span>
            <span className="title-filter">Location</span>
          </h2>
          <RefinementList attribute="location" />
        </div>
        <div className="filter district">
          <h2>
            <span className="count-filter">121</span>
            <span className="title-filter">Județ</span>
          </h2>
          <RefinementList attribute="district" />
        </div>
        <div className="filter service">
          <h2>
            <span className="count-filter">121</span>
            <span className="title-filter">Service</span>
          </h2>
          <RefinementList attribute="service.name" />
        </div>
        <Configure hitsPerPage={10} />
      </div>
    );
  }

  getContentResult(index: string | undefined, hit: any, className: string) {
    return (
      <div className="left-panel">
        <Index indexName={index}>
          <div className={className}>
            <Hits hitComponent={hit} />
          </div>
          <Pagination />
        </Index>
      </div>
    );
  }

  render() {
    return (
      <div className="ais-InstantSearch">
        <InstantSearch indexName={`${indexProviders}`} searchClient={client}>
          <div className="seacrh-header">
            <SearchBox
              submit={undefined}
              onSubmit={undefined}
              translations={{
                placeholder: 'Cauta aici...',
              }}
            />
          </div>

          <div className="search-result-wrapper">
            <Tabs>
              <TabList>
                <Tab>
                  <span className="stats-count">328</span>
                  <span className="tab-title tab-icon-providers">Providers</span>
                </Tab>
                <Tab>
                  <span className="stats-count">12</span>
                  <span className="tab-title tab-icon-articles">Articole (Blog)</span>
                </Tab>
                <Tab>
                  <span className="stats-count">37</span>
                  <span className="tab-title tab-icon-pages">Pagini</span>
                </Tab>
              </TabList>
              <TabPanel>
                {this.getContentResult(indexProviders, this.hitProviders, 'providers')}
                {this.getFilters()}
              </TabPanel>
              <TabPanel>
                {this.getContentResult(indexBlog, this.hitPagesBlog, 'blog')}
                {this.getFilters()}
              </TabPanel>
              <TabPanel>
                {this.getContentResult(indexPages, this.hitPagesBlog, 'pages')}
                {this.getFilters()}
              </TabPanel>
            </Tabs>
          </div>
        </InstantSearch>
      </div>
    );
  }
}
