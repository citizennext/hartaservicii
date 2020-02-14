import React, { Component } from 'react';

export default class SearchContent extends Component {
  render() {
    return (
      <>
        <input
          id="search"
          className="border-burg border-6 rounded-full background-white absolute -mt-24 pl-10"
          placeholder="Caută serviciu, zonă sau tipologie beneficiar"
        />
      </>
    );
  }
}
