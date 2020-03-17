import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
// @ts-ignore
import LinesEllipsis from 'react-lines-ellipsis';
// @ts-ignore
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

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
};

export function FeaturedPosts({ featured }: Props) {
  const countFeatured = featured.length;
  const firstSlug = 'noutati';
  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
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
                  <ResponsiveEllipsis text={item.title} maxLine="2" ellipsis="..." trimRight basedOn="letters" />
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
              <div className="summary">
                <ResponsiveEllipsis text={item.summary} maxLine="3" ellipsis="..." trimRight basedOn="letters" />
              </div>
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
