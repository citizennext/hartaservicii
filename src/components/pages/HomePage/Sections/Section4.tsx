import React from 'react'
import echipa from '../../../../assets/images/echipa.png'
import BlogPost from '../../../BlogPost'

export default class Content extends React.Component {
  render() {
    return (
      <div id="section4" className="section blogposts bg-white">
        <div className="interior mb-16">
          <img className="border-b-8 border-burg mb-4" src={echipa} />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <button className="my-4">Toate noutățile</button>
        </div>
      </div>
    )
  }
}
