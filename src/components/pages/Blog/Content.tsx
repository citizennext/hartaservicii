import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { FeaturedPosts } from './FeaturedPosts';

type Blogs = {
  id: string;
  title: string;
  summary: string;
  slug: string;
  featured: boolean;
  createdAt: any;
  image: any;
};

type Props = {
  blogs: [Blogs];
};

export function Content({ blogs }: Props) {
  const featuredPosts = { featuredPosts: blogs };
  const windowSize = useWindowSize();
  return (
    <div className="wrapper">
      <FeaturedPosts {...featuredPosts} />
      <ul className="blog-posts flex flex-wrap">
        {blogs.map((item, index) => (
          <li className="blog-post-item" key={`${item.id}-${index}`}>
            <div className="flex flex-wrap">
              {windowSize.width && windowSize.width >= 768 ? (
                <div className="image">
                  <Link to={`/blog/${item.slug}`} title={item.title}>
                    <Img fluid={item.image.urlSharp.childImageSharp.fluid} className="md:w-full" />
                  </Link>
                </div>
              ) : null}
              <div className="content">
                <h3 className="title">
                  <Link to={`/blog/${item.slug}`} title={item.title}>
                    {item.title}
                  </Link>
                </h3>
                <span className="date">
                  {/* @todo @St3phan, @Seco, @Cezar - it must fixing the date format */}
                  {item.createdAt.toLocaleString('ro-RO', {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <span className="summary">{item.summary}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
