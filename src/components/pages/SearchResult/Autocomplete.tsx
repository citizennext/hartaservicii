import React, { Component } from 'react';
import { Highlight, connectAutoComplete } from 'react-instantsearch-dom';
import AutoSuggest from 'react-autosuggest';

class Autocomplete extends Component {
  // @ts-ignore
  state = { value: this.props.currentRefinement };

  onChange = (event: any, { newValue }: any) => {
    this.setState({ value: newValue });
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
    return <Highlight attribute="name" hit={hit} tagName="mark" />;
  }

  render() {
    const { hits }: any = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: 'Search for a product...',
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
      />
    );
  }
}

// @ts-ignore
export default connectAutoComplete(Autocomplete);
