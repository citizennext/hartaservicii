import React, { Component } from 'react';
import { connectAutoComplete, Highlight, PoweredBy } from 'react-instantsearch-dom';
import AutoSuggest from 'react-autosuggest';
import { navigate } from '@reach/router';
import getSlug from 'speakingurl';
class Autocomplete extends Component {
  // @ts-ignore
  state = { value: this.props.currentRefinement, active: false };

  onSuggestionSelected = (event: any, { suggestion, suggestionValue, method }: any) => {
    const typeFy = suggestion.type.toLowerCase();
    const slug =
      typeFy === 'servicii'
        ? `/harta/serviciu/${getSlug(suggestion.name)}/${suggestion.objectID}/`
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
  onChange = (event: any, { newValue, method }: any) => {
    if (method === 'enter') {
      return navigate('/cautare', { state: { searchValue: this.state.value } });
    }
    this.setState({ value: newValue, active: true });
  };
  render() {
    const { hits }: any = this.props;

    const inputProps = {
      placeholder: 'Caută serviciu, zonă sau tipologie beneficiar',
      onChange: this.onChange,
      onBlur: () => this.setState({ active: false }),
      value: this.state.value,
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
          className={this.state.active ? 'active' : ''}
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
