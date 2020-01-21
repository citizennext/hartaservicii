import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Separator from '../Separator';

type Props = {
  id: string;
  classBlogPost: string;
  title: string;
  publishedAt: string;
  image: any;
  summary: string;
  slug: string;
};

function BlogPost(props: Props) {
  const pubDate = new Date(props.publishedAt);
  return (
    <div className={`${props.classBlogPost} relative blog-post md:px-2 xl:px-4`}>
      <div className="blog-image">
        <Img fluid={props.image.urlSharp.childImageSharp.fluid} className="md:w-full" />
      </div>
      <h3 className="pt-4">{props.title}</h3>
      <p className="date">
        {pubDate.toLocaleString('ro-RO', {
          timeZone: 'UTC',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </p>
      <p className="excerpt pb-16 md:pb-0">{props.summary}</p>
      <div className="blog-bottom flex items-center">
        <Separator color="burg"></Separator>
        <Link to={`/noutati/${props.slug}`}>
          <button className="arrowonly absolute md:relative md:1/4 "></button>
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
