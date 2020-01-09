import React from 'react';
import BlogPost from '../../../BlogPost';

export default class Content extends React.Component {
  render() {
    return (
      <div id="section4" className="section blogposts bg-white md:mb-32 xl:max-w-griddw xl:m-auto xl:mb-40">
        <div className="interior mb-16">
          <div className="md:flex">
            <BlogPost />
            <BlogPost />
            <BlogPost class="md:hidden xl:block" />
          </div>
          <button className="section-button my-4">Toate noutățile</button>
        </div>
      </div>
    );
  }
}
