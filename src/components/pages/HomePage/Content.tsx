import React, { Fragment } from 'react';
import Hero from './Sections/Hero';
import Statistics from './Sections/Statistics';
// import Blog from './Sections/Blog';
import Contact from './Sections/Contact';
import Lists from './Sections/Lists';
import Partners from './Sections/Partners';

export default class Content extends React.Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Lists />
        <Statistics />
        {/* <Blog /> */}
        <Partners />
        <Contact />
      </Fragment>
    );
  }
}
