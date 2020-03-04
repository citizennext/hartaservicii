import React from 'react';
import Hero from './Sections/Hero';
import Statistics from './Sections/Statistics';
import Blog from './Sections/Blog';
import Contact from './Sections/Contact';
import Lists from './Sections/Lists';
import Partners from './Sections/Partners';

export default class Content extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Lists />
        <Statistics />
        <Blog />
        <Partners />
        <Contact />
      </>
    );
  }
}
