import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
// @ts-ignore
import LinesEllipsis from 'react-lines-ellipsis';
// @ts-ignore
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
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
  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
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
          <li className="blog-post-item px-0 md:px-6" key={`${item.id}-${index}`}>
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
                    <ResponsiveEllipsis text={item.title} maxLine="3" ellipsis="..." trimRight basedOn="letters" />
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
                <span className="summary">
                  <ResponsiveEllipsis text={item.summary} maxLine="4" ellipsis="..." trimRight basedOn="letters" />
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
