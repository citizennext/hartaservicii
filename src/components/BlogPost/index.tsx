import React from 'react';
import echipa from '../../../src/assets/images/echipa.png';

export default class BlogPost extends React.Component {
  render() {
    return (
      <div className={`${this.props.class} relative blog-post md:w-1/2 md:mx-2`}>
        <img src={echipa} className="md:w-full" />
        <h3 className="border-t-8 border-burg pt-4">{this.props.title}</h3>
        <p className="date">{this.props.date}</p>
        <p className="excerpt pb-10 md:pb-0">{this.props.content}</p>
        <div className="flex items-center">
          <div className="hidden md:block border-t-8 border-snow w-3/4"></div>
          <button className="arrowonly absolute md:relative md:1/4 "></button>
        </div>
      </div>
    );
  }
}

BlogPost.defaultProps = {
  class: '',
  title: 'Am lansat Harta serviciilor sociale din România',
  date: '25.Nov.2019',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet finibus erat, eu vehicula sem gravida at. Duis laoreet sodales malesuada.',
};
