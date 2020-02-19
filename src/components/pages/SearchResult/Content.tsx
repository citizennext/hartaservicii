import React from 'react';
import { Link } from 'gatsby';
import {
  InstantSearch,
  Hits,
  Stats,
  Pagination,
  Highlight,
  Configure,
  connectSearchBox,
  connectRefinementList,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import withURLSync from './URLSync';
// @ts-ignore
// import './App.css';

const searchClient = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_API_KEY}`);
// @ts-ignore
const App = props => (
  <InstantSearch
    searchClient={searchClient}
    indexName={`${process.env.ALGOLIA_INDEX_NAME_PROVIDERS}`}
    searchState={props.searchState}
    createURL={props.createURL}
    onSearchStateChange={props.onSearchStateChange}>
    <Configure hitsPerPage={10} />
    <Header />
    <section>
      <Results />
      <Facets />
    </section>
  </InstantSearch>
);

const Header = () => (
  <header>
    <SearchBox />
  </header>
);

const SearchBox = connectSearchBox(({ currentRefinement, refine }) => (
  <div className="searchbox-container">
    <div className="input-group">
      <input
        type="text"
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
        autoComplete="off"
        className="form-control"
      />
      <span className="input-group-btn">
        <button className="btn btn-default">
          <i className="fa fa-search" />
        </button>
      </span>
    </div>
  </div>
));

const Facets = () => (
  <aside>
    <ul className="nav nav-list panel">
      <li>
        <a href="./">
          <i className="fa fa-home" /> Home
        </a>
      </li>
      <li className="separator" />
    </ul>
    <Panel name="Location" id="location">
      <RefinementListLinks attribute="location" />
    </Panel>
    <Panel name="District" id="district">
      <RefinementListLinks attribute="district" />
    </Panel>
  </aside>
);

// @ts-ignore
const Panel = ({ name, children, id }) => (
  <div id={id}>
    <h5>
      <i className="fa fa-chevron-right" /> {name}
    </h5>
    {children}
  </div>
);

const Hit = hit => {
  const { id, address, location, district, coordinates } = hit.hit;
  return (
    <div className="hit media">
      <div className="media-body">
        <h4 className="media-heading">
          <Link to={`/harta?provider=${id}`}>
            <Highlight attribute="name" hit={hit.hit} />
          </Link>
        </h4>
        <p className="article-address">{address}</p>
        <p className="article-location">{location}</p>
        <p className="article-location">{district}</p>
        <p className="article-location">{coordinates}</p>
      </div>
    </div>
  );
};

const Results = connectSearchBox(() => (
  <article>
    <div id="stats" className="text-right text-muted">
      <Stats />
    </div>
    <hr />
    <div id="hits">
      <Hits hitComponent={Hit} />
    </div>
    <div id="pagination" className="text-center">
      <Pagination />
    </div>
  </article>
));

const RefinementListLinks = connectRefinementList(({ items, refine, createURL }) => {
  const hitComponents = items.map(item => (
    <div className={item.isRefined ? ' active' : ''} key={item.label}>
      <a
        className="item"
        href={createURL(item.value)}
        onClick={e => {
          e.preventDefault();
          refine(item.value);
        }}>
        <span> {item.label}</span>
        <span className="badge pull-right">{item.count}</span>
      </a>
    </div>
  ));

  return <div className="nav nav-list">{hitComponents}</div>;
});

export default withURLSync(App);
