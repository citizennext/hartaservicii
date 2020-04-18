import React from 'react';
import { Helmet } from 'react-helmet';
import data from '../../data/global.json';

type Props = {
  postTitle?: string;
  summary?: string;
  postImage?: string;
  slug?: string;
  isRepeatable?: boolean;
  bodyClassName?: string;
};

const SEO = ({ postTitle, summary, postImage, slug, isRepeatable, bodyClassName }: Props) => {
  const title = postTitle || data.head.title;
  const description = summary || data.head.description;
  const image = postImage ? postImage : data.head.image;
  const url = slug ? `${data.head.url}/${slug}` : data.head.url;

  return (
    <Helmet bodyAttributes={{ class: bodyClassName || '' }}>
      <script type="text/javascript" src="https://cdn.polyfill.io/v2/polyfill.js" />
      {postTitle ? <title>{`${postTitle} | ${data.head.title}`}</title> : <title>{`${data.head.title}`}</title>}
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isRepeatable ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={data.head.fbAppID} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content={data.head.twitter} /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <html lang={data.head.lang} />
    </Helmet>
  );
};

export default SEO;
