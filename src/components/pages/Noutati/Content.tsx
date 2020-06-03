import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { FeaturedPosts } from './FeaturedPosts';

import { Blogs } from '../../../pages/noutati';

export function Content({ featured, regular }: Blogs) {
  const firstSlug = 'noutati';
  const dateFormat = (date: any) => {
    return new Date(date);
  };

  return (
    <div className="wrapper">
      <FeaturedPosts featured={featured} />
      <h1 className="flex flex-wrap mx-0 md:mx-6 lg:mx-48 xl:mx-56 mt-16 mb-4">
        <span>Noutăţi</span>
      </h1>
      <ul className="blog-posts flex flex-wrap">
        {regular.map((item, index) => (
          <li className="blog-post-item" key={`${item.id}-${index}`}>
            <div className="flex flex-wrap">
              {item.image && (
                <div className="image">
                  <Link to={`/${firstSlug}/${item.slug}`} title={item.title}>
                    <Img fluid={item.image.urlSharp.childImageSharp.fluid} className="w-full" />
                  </Link>
                </div>
              )}
              <div className="content" data-image-exist={!!item.image}>
                <h3 className="title">
                  <Link to={`/${firstSlug}/${item.slug}`} title={item.title}>
                    <span className="ellipsis-clamp-3">{item.title}</span>
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
                <span className="summary ellipsis-clamp-3">{item.summary}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
