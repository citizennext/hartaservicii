import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Separator from '../Separator';

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
  const pubDate = new Date(props.publishedAt);
  return (
    <StaticQuery
      query={graphql`
        query blog {
          file(relativePath: { regex: "/echipa.png/" }) {
            childImageSharp {
              fluid(maxWidth: 370) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div className={`${props.classBlogPost} relative blog-post md:w-1/2 md:mx-2 xl:mx-4`}>
            <div className="blog-image">
              <Img fluid={data.file.childImageSharp.fluid} className="md:w-full" />
            </div>
            <h3 className="pt-4">{props.title}</h3>
            <p className="date">
              {pubDate.toLocaleString('ro-RO', {
                timeZone: 'UTC',
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="excerpt pb-10 md:pb-0">{props.content}</p>
            <div className="blog-bottom flex items-center">
              <Separator color="burg"></Separator>
              <button className="arrowonly"></button>
            </div>
          </div>
        );
      }}
    />
  );
}

BlogPost.defaultProps = {
  classBlogPost: '',
  image: 'echipa.png',
  title: 'Am lansat Harta serviciilor sociale din România',
  date: '25.Nov.2019',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet finibus erat, eu vehicula sem gravida at. Duis laoreet sodales malesuada.',
};

export default BlogPost;
