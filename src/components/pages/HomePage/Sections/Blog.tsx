import React from 'react';
import BlogPost from '../../../BlogPost';

export default class Blog extends React.Component {
  render() {
    return (
      <div id="blog" className="section blogposts mb-40 bg-white md:mb-56 xl:max-w-griddw xl:m-auto xl:mb-64">
        <div className="interior mb-16">
          <div className="md:flex">
            <BlogPost />
            <BlogPost />
            <BlogPost classBlogPost="md:hidden xl:block" />
          </div>
          <button className="section-button my-4 md:mt-20">Toate noutățile</button>
        </div>
      </div>
    );
  }
}
