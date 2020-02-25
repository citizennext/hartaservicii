import React, { Component } from 'react';

export default class SearchContent extends Component {
  render() {
    return (
      <div className="search-icon">
        <input id="search" className="search-input" placeholder="Caută serviciu, zonă sau tipologie beneficiar" />
      </div>
    );
  }
}
