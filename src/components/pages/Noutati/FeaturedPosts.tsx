import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

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
  featuredPosts: [Blogs];
};

export function FeaturedPosts({ featuredPosts }: Props) {
  const featured = featuredPosts.filter(item => item.featured).slice(0, 2);
  const countFeatured = featured.length;
  const firstSlug = 'noutati';
  const dateFormat = (date: any) => {
    return new Date(date);
  };
  return (
    <ul className="flex flex-wrap blog-posts-featured">
      {featured.map((item, index) => (
        <li className="blog-post-featured-item" data-items={countFeatured} key={`${item.id}-${item.featured}-${index}`}>
          <div className="flex flex-wrap">
            <div className="image">
              <Link to={`/${firstSlug}/${item.slug}`} title={item.title}>
                <Img fluid={item.image.urlSharp.childImageSharp.fluid} className="md:w-full" />
              </Link>
            </div>
            <div className="content">
              <h3 className="title">
                <Link to={`/${firstSlug}/${item.slug}`} title={item.title}>
                  {item.title}
                </Link>
              </h3>
              <span className="date">
                {dateFormat(item.createdAt).toLocaleString('ro-RO', {
                  timeZone: 'UTC',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              <span className="summary">{item.summary}</span>
              <Link to={`/${firstSlug}/${item.slug}`} title={item.title} className="btn-arrowonly">
                <span>View Post</span>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
