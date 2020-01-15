import React, { Fragment } from 'react';
import Hero from './Sections/Hero';
import Section2 from './Sections/Section2';
import Statistics from './Sections/Statistics';
import Blog from './Sections/Blog';
import Section5 from './Sections/Section5';
import Contact from './Sections/Contact';

export default class Content extends React.Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Section2 />
        <Statistics />
        <Blog />
        <Section5 />
        <Contact />
      </Fragment>
    );
  }
}
