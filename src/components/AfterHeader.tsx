import React from 'react';
import Img from 'gatsby-image';
import Separator from './Separator';

type Props = {
  header?: string;
  image?: any;
  className?: string;
};

export function AfterHeader({ header, image, className }: Props) {
  return (
    <div className={`page-header ${className}`}>
      <Separator color="burg" />
      <div className="wrapper">
        <span>{header}</span>
        {image && <Img fluid={image} />}
      </div>
      <Separator color="burg" bottom="-6" />
    </div>
  );
}
