import React from 'react';
import Img from 'gatsby-image';
import Separator from '../../Separator';

type Props = {
  header: object;
};

export function AfterHeader({ header }: Props) {
  return (
    <div className="page-header blog-single">
      <Separator color="burg" />
      <div className="wrapper">
        <Img fluid={header} />
      </div>
      <Separator color="burg" bottom="-6" />
    </div>
  );
}
