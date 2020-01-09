/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx } from '@emotion/core';
import Hero from './Sections/Hero';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Section5 from './Sections/Section5';
import Section6 from './Sections/Section6';

export default class Content extends React.Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </Fragment>
    );
  }
}
