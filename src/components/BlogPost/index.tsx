import React from 'react'

export default class BlogPost extends React.Component {
  render() {
    return (
      <div className={`border-b-8 border-burg ${this.props.class} relative`}>
        <h3 className="pt-4">{this.props.title}</h3>
        <p className="date">{this.props.date}</p>
        <p className="excerpt pb-10">{this.props.content}</p>
        <button className="arrowonly absolute"></button>
      </div>
    )
  }
}

BlogPost.defaultProps = {
  title: 'Am lansat Harta serviciilor sociale din România',
  date: '25.Nov.2019',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet finibus erat, eu vehicula sem gravida at. Duis laoreet sodales malesuada.',
}
