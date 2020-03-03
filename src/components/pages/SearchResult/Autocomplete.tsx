import React, { Component } from 'react';
import { connectAutoComplete, Highlight } from 'react-instantsearch-dom';
import AutoSuggest from 'react-autosuggest';
import { navigate } from '@reach/router';

class Autocomplete extends Component {
  // @ts-ignore
  state = { value: this.props.currentRefinement };

  onChange = (event: any, { newValue }: any) => {
    this.setState({ value: newValue });
  };

  onSuggestionSelected = (event: any, { suggestionValue, method }: any) => {
    if (method === 'click' || method === 'enter') {
      navigate('/rezultat', { state: { searchValue: suggestionValue } });
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
    return hit.name;
  }

  renderSuggestion(hit: any) {
    return (
      <>
        <Highlight attribute="name" hit={hit} tagName="mark" />
        <br />
        {hit.location && (
          <span className="hit-location">
            Locație: {hit.location}, {hit.district}
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
      <AutoSuggest
        suggestions={hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    );
  }
}

// @ts-ignore
export default connectAutoComplete(Autocomplete);
