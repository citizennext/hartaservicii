import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
type Props = {
  id: string;
  classBlogPost: string;
  title: string;
  publishedAt: string;
  image: any;
  content: string;
  slug: string;
};

function BlogPost(props: Props) {
  return (
    <div className={`${props.classBlogPost} relative blog-post md:w-1/2 md:mx-2`}>
      <Img fluid={props.image.urlSharp.childImageSharp.fluid} className="md:w-full" />
      <h3 className="border-t-8 border-burg pt-4">{props.title}</h3>
      <p className="date">{props.publishedAt}</p>
      <p className="excerpt pb-10 md:pb-0">{props.content}</p>
      <div className="flex items-center">
        <div className="hidden md:block border-t-8 border-snow w-3/4"></div>
        <Link to={`/noutati/${props.slug}`}>
          <button className="arrowonly absolute md:relative md:1/4 "></button>
        </Link>
      </div>
    </div>
  );
}

BlogPost.defaultProps = {
  classBlogPost: '',
  title: 'Am lansat Harta serviciilor sociale din România',
  date: '25.Nov.2019',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet finibus erat, eu vehicula sem gravida at. Duis laoreet sodales malesuada.',
};

export default BlogPost;
