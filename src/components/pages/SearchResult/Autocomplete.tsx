import React, { Component } from 'react';
import { connectAutoComplete, Highlight, PoweredBy } from 'react-instantsearch-dom';
import AutoSuggest from 'react-autosuggest';
import { navigate } from '@reach/router';
import getSlug from 'speakingurl';
class Autocomplete extends Component {
  // @ts-ignore
  state = { value: this.props.currentRefinement };

  onChange = (event: any, { newValue }: any) => {
    this.setState({ value: newValue });
  };

  onSuggestionSelected = (event: any, { suggestion, suggestionValue, method }: any) => {
    event.preventDefault();
    const typeFy = suggestion.type.toLowerCase();
    const slug =
      typeFy === 'servicii'
        ? `/harta/serviciu/${getSlug(suggestion.name)}/${suggestion.id}`
        : typeFy === 'noutăți'
        ? `/noutati/${suggestion.slug}`
        : `/${suggestion.slug}`;
    if (method === 'click' || method === 'enter') {
      navigate(slug, { state: { searchValue: suggestionValue } });
    }
  };

  onSuggestionsFetchRequested = ({ value }: any) => {
    // @ts-ignore
    this.props.refine(value);
  };

  onSuggestionsClearRequested = () => {
    // @ts-ignore
    this.props.refine();
  };

  getSuggestionValue(hit: any) {
    const typeFy = hit.type.toLowerCase();
    return typeFy === 'servicii' ? hit.name : hit.title;
  }

  renderSuggestion(hit: any) {
    const typeFy = hit.type.toLowerCase();
    return (
      <>
        {typeFy === 'servicii' && <Highlight attribute="name" hit={hit} className="hit-location-title" />}
        {typeFy !== 'servicii' && <Highlight attribute="title" hit={hit} className="hit-page-title" />}
        <br />
        {typeFy === 'servicii' && (
          <span className="hit-location-summary">
            Furnizor: <Highlight attribute="supplier.name" hit={hit} /> <br />
            <span className="hit-location">
              Locație: {hit.location}, {hit.district}
            </span>
          </span>
        )}
        {typeFy !== 'servicii' && (
          <span className="hit-page-summary">
            <Highlight attribute="summary" hit={hit} />
          </span>
        )}
      </>
    );
  }
  render() {
    const { hits }: any = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: 'Caută serviciu, zonă sau tipologie beneficiar',
      onChange: this.onChange,
      value,
    };
    return (
      <>
        <AutoSuggest
          suggestions={hits}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
        />
        <PoweredBy
          // Optional parameters
          translations={{
            searchBy: 'Search by',
          }}
        />
      </>
    );
  }
}

// @ts-ignore
export default connectAutoComplete(Autocomplete);
