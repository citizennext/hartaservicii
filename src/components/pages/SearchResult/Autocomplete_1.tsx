import React, { useState } from 'react';
import { connectAutoComplete, Configure } from 'react-instantsearch-dom';
import { navigate, Link } from '@reach/router';
const CustomAutocomplete = ({ hits, currentRefinement, refine }: any) => {
  const [searchedTerm, setSearchedTerm] = useState(currentRefinement);
  const handleChange = (e: any) => {
    setSearchedTerm(e.currentTarget.value);
    refine(e.currentTarget.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate('/rezultat', { state: { searchValue: searchedTerm } });
  };
  return (
    <>
      <Configure hitsPerPage={4} />
      <ul>
        <li>
          <form onSubmit={e => handleSubmit(e)}>
            <input type="search" value={currentRefinement} onChange={e => handleChange(e)} />
          </form>
        </li>
        <div className="react-autosuggest__suggestions-container--open">
          {hits.map((hit: any, index: number) => (
            <Link to={`#`} state={searchedTerm} key={index}>
              <li key={hit.objectID}>{hit.name}</li>
            </Link>
          ))}
        </div>
      </ul>
    </>
  );
};

export const Autocomplete_1 = connectAutoComplete(CustomAutocomplete);
