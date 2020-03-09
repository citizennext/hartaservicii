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
  featured: [Blogs];
  regular: [Blogs];
};

export function Content({ featured, regular }: Props) {
  const firstSlug = 'noutati';
  const windowSize = useWindowSize();
  const dateFormat = (date: any) => {
    return new Date(date);
  };

  return (
    <div className="wrapper">
      <FeaturedPosts featured={featured} />
      <ul className="blog-posts flex flex-wrap">
        {regular.map((item, index) => (
          <li className="blog-post-item" key={`${item.id}-${index}`}>
            <div className="flex flex-wrap">
              {windowSize.width && windowSize.width >= 768
                ? item.image && (
                    <div className="image">
                      <Link to={`/${firstSlug}/${item.slug}`} title={item.title}>
                        <Img fluid={item.image.urlSharp.childImageSharp.fluid} className="md:w-full" />
                      </Link>
                    </div>
                  )
                : null}
              <div className="content" data-image-exist={!!item.image}>
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
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
