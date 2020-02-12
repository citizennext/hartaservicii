import React from 'react';
import Img from 'gatsby-image';
import Separator from './Separator';

type Props = {
  header?: string;
  image?: any;
  className?: string;
  hasBottomSeparator: boolean;
  hasTopSeparator: boolean;
};

export function AfterHeader({ header, image, className, hasTopSeparator, hasBottomSeparator }: Props) {
  return (
    <div className={`page-header ${className}`}>
      {hasTopSeparator && <Separator color="burg" />}
      <div className="wrapper">
        <span>{header}</span>
        {image && <Img fluid={image} />}
      </div>
      {hasBottomSeparator && <Separator color="burg" bottom="-6" />}
    </div>
  );
}

AfterHeader.defaultProps = {
  hasTopSeparator: true,
  hasBottomSeparator: true,
};
