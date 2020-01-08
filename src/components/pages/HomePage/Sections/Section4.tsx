import React from 'react'
import BlogPost from '../../../BlogPost'

export default class Content extends React.Component {
  render() {
    return (
      <div id="section4" className="section blogposts bg-white">
        <div className="interior mb-16">
          <div className="md:flex">
            <BlogPost />
            <BlogPost />
            <BlogPost class="md:hidden xl:block" />
          </div>
          <button className="my-4 md:left-1/4">Toate noutățile</button>
        </div>
      </div>
    )
  }
}
