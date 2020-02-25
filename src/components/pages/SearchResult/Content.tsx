import React from 'react';
import { Link } from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
  Index,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import AutoComplete from './AutoComplete';

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

  render() {
    return (
      <div className="ais-InstantSearch">
        <InstantSearch indexName={`${indexProviders}`} searchClient={client}>
          <div className="seacrh-header">
            <SearchBox />
            <AutoComplete />
          </div>

          <div className="search-result-wrapper">
            <Tabs>
              <TabList>
                <Tab>
                  <span className="stats-count">328</span>
                  <span className="tab-title">Toate Rezultatele</span>
                </Tab>
                <Tab>
                  <span className="stats-count">328</span>
                  <span className="tab-title">Providers</span>
                </Tab>
                <Tab>
                  <span className="stats-count">328</span>
                  <span className="tab-title">Articole (Blog)</span>
                </Tab>
                <Tab>
                  <span className="stats-count">328</span>
                  <span className="tab-title">Pagini</span>
                </Tab>
              </TabList>

              <TabPanel>
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
                    <h2>Județ</h2>
                    <RefinementList attribute="district" />
                  </div>
                  <div className="filter service">
                    <h2>Service</h2>
                    <RefinementList attribute="service.name" />
                  </div>
                  <Configure hitsPerPage={10} />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="left-panel">
                  <Index indexName={`${indexProviders}`}>
                    <div className="providers">
                      <Hits hitComponent={this.hitProviders} />
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
                    <h2>Județ</h2>
                    <RefinementList attribute="district" />
                  </div>
                  <div className="filter service">
                    <h2>Service</h2>
                    <RefinementList attribute="service.name" />
                  </div>
                  <Configure hitsPerPage={10} />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="left-panel">
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
                    <h2>Județ</h2>
                    <RefinementList attribute="district" />
                  </div>
                  <div className="filter service">
                    <h2>Service</h2>
                    <RefinementList attribute="service.name" />
                  </div>
                  <Configure hitsPerPage={10} />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="left-panel">
                  <Index indexName={`${indexPages}`}>
                    <div className="pages">
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
                    <h2>Județ</h2>
                    <RefinementList attribute="district" />
                  </div>
                  <div className="filter service">
                    <h2>Service</h2>
                    <RefinementList attribute="service.name" />
                  </div>
                  <Configure hitsPerPage={10} />
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </InstantSearch>
      </div>
    );
  }
}
