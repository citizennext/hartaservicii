/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';
import Data from '../../data/global.json';

type Props = {
  page: keyof typeof Data.page;
};

const Seo: React.FC<Props> = props => {
  const data = Data.page[props.page].seo;
  const dataHead = Data.head.siteUrl;
  const homepage = 'homepage';

  return (
    <Helmet defer={false} defaultTitle={`${data?.title}`} titleTemplate={`%s | ${data?.title}`}>
      <link rel="canonical" href={`${dataHead}${props.page === homepage ? '' : '/' + props.page}`} />
      <meta name="description" content={`${data?.description}`} />
      <meta name="keywords" content={`${data?.keywords}`} />
    </Helmet>
  );
};

export default Seo;
