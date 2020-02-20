import React from 'react';
import Img from 'gatsby-image';
import Separator from './Separator';

type Props = {
  header?: string | object | undefined;
  image?: any;
  className?: string;
};

export function AfterHeader({ header, image, className }: Props) {
  return (
    <div className={`page-header ${className}`}>
      <Separator color="burg" />
      <div className="wrapper">
        <div>{header}</div>
        {image && <Img fluid={image} />}
      </div>
      <Separator color="burg" bottom="-6" />
    </div>
  );
}
