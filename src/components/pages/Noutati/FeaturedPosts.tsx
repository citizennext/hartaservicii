import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { BlogShort } from '../../../pages/noutati';

export function FeaturedPosts({ featured }: { featured: BlogShort[] }) {
  const countFeatured = featured.length;
  const firstSlug = 'noutati';
  const dateFormat = (date: any) => {
    return new Date(date);
  };
  return (
    <ul className="flex flex-wrap blog-posts-featured px-0 md:px-6">
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
                  <span className="ellipsis-clamp-2">{item.title}</span>
                </Link>
              </h3>
              <div className="date">
                {dateFormat(item.createdAt).toLocaleString('ro-RO', {
                  timeZone: 'UTC',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
              <div className="summary ellipsis-clamp-3">{item.summary}</div>
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
