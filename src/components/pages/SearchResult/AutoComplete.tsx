import React from 'react';
import { Highlight, connectAutoComplete } from 'react-instantsearch-dom';
// @ts-ignore
import AutoSuggest from 'react-autosuggest';

class AutoComplete extends React.Component<{}> {
  // @ts-ignore
  state = { value: this.props.currentRefinement };

  onChange = (event: any, { newValue }: any) => {
    this.setState({
      value: newValue,
    });
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
    let result: any;
    if (hit.name) {
      result = <Highlight attribute="name" hit={hit} tagName="mark" />;
    } else if (hit.title) {
      result = <Highlight attribute="title" hit={hit} tagName="mark" />;
    } else {
      result = false;
    }

    return result;
  }

  renderSectionTitle(section: any) {
    return section.index;
  }

  getSectionSuggestions(section: any) {
    return section.hits;
  }

  render() {
    const { hits, onSuggestionSelected }: any = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: 'Cauta...',
      onChange: this.onChange,
      value,
    };

    return (
      <AutoSuggest
        suggestions={hits}
        multiSection={true}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
      />
    );
  }
}

// @ts-ignore
export default connectAutoComplete(AutoComplete);
