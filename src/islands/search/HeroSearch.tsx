import { PUBLIC_ALGOLIA_INDEX_NAME_COMMON } from 'astro:env/client';
import type { Hit } from 'instantsearch.js';
import { useId, useState, useSyncExternalStore, type KeyboardEvent } from 'react';
import { Configure, Highlight, InstantSearch, PoweredBy, useHits, useSearchBox } from 'react-instantsearch';
import { nextActiveIndex } from '../../lib/combobox';
import { hitPath, type SearchRecord } from '../../lib/search';
import { typeaheadClient } from './client';

// Ported from the legacy react-autosuggest box; keeps its class names so the theme styles apply.
const SUGGESTIONS = 6;
const noopSubscribe = () => () => {};
const PLACEHOLDER = 'Caută serviciu, zonă sau tipologie beneficiar';

function Suggestion({ hit }: { hit: Hit<SearchRecord> }) {
  if (hit.type === 'Servicii') {
    return (
      <>
        <Highlight attribute="name" hit={hit} classNames={{ root: 'hit-location-title' }} />
        <br />
        <span className="hit-location-summary">
          Furnizor: {hit.supplier.name}
          <br />
          <span className="hit-location">
            Locație: {hit.location}, {hit.district}
          </span>
        </span>
      </>
    );
  }
  return (
    <>
      <Highlight attribute="title" hit={hit} classNames={{ root: 'hit-page-title' }} />
      <br />
      <span className="hit-page-summary">{hit.summary}</span>
    </>
  );
}

function Autocomplete() {
  const listId = useId();
  const { query, refine } = useSearchBox();
  const { items } = useHits<SearchRecord>();
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  const suggestions = value.trim() && query ? items : [];
  const showList = isOpen && suggestions.length > 0;

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setIsOpen(true);
      setActive(nextActiveIndex(active, event.key, suggestions.length));
    } else if (event.key === 'Escape') {
      setIsOpen(false);
      setActive(null);
    } else if (event.key === 'Enter' && showList && active !== null && suggestions[active]) {
      event.preventDefault();
      window.location.assign(hitPath(suggestions[active]));
    }
  };

  return (
    <form action="/cautare" method="get" role="search">
      <div className="react-autosuggest__container">
        <label htmlFor={`${listId}-input`} className="sr-only">
          Caută un serviciu social
        </label>
        <input
          id={`${listId}-input`}
          className="react-autosuggest__input"
          type="search"
          name="query"
          placeholder={PLACEHOLDER}
          autoComplete="off"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={showList}
          aria-controls={listId}
          aria-activedescendant={showList && active !== null ? `${listId}-${active}` : undefined}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setIsOpen(true);
            setActive(null);
            refine(event.target.value);
          }}
          onKeyDown={onKeyDown}
          onBlur={() => setIsOpen(false)}
          onFocus={() => setIsOpen(true)}
        />
        <div
          className={`react-autosuggest__suggestions-container${showList ? ' react-autosuggest__suggestions-container--open' : ''}`}>
          {showList && (
            <ul id={listId} role="listbox" className="react-autosuggest__suggestions-list">
              {suggestions.map((hit, index) => (
                <li
                  key={hit.objectID}
                  id={`${listId}-${index}`}
                  role="option"
                  aria-selected={index === active}
                  className={`react-autosuggest__suggestion${index === active ? ' react-autosuggest__suggestion--highlighted' : ''}`}
                  // mousedown fires before the input's blur closes the list.
                  onMouseDown={(event) => {
                    event.preventDefault();
                    window.location.assign(hitPath(hit));
                  }}
                  onMouseEnter={() => setActive(index)}>
                  <Suggestion hit={hit} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <PoweredBy className={isOpen ? 'active' : undefined} />
    </form>
  );
}

/** Same field without InstantSearch, which renders nothing on the server. Submits to /cautare. */
function StaticSearchForm() {
  return (
    <form action="/cautare" method="get" role="search">
      <div className="react-autosuggest__container">
        <label htmlFor="hero-search-static" className="sr-only">
          Caută un serviciu social
        </label>
        <input
          id="hero-search-static"
          className="react-autosuggest__input"
          type="search"
          name="query"
          placeholder={PLACEHOLDER}
          autoComplete="off"
        />
      </div>
    </form>
  );
}

export default function HeroSearch() {
  // Server and first client render match (plain form); the autocomplete takes over after mount.
  const isClient = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
  if (!isClient) return <StaticSearchForm />;

  return (
    <InstantSearch
      searchClient={typeaheadClient}
      indexName={PUBLIC_ALGOLIA_INDEX_NAME_COMMON}
      future={{ preserveSharedStateOnUnmount: true }}>
      <Configure hitsPerPage={SUGGESTIONS} />
      <Autocomplete />
    </InstantSearch>
  );
}
