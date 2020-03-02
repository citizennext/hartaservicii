import React from 'react';
import Img from 'gatsby-image';
import Separator from './Separator';

type Props = {
  header?: string | object | undefined;
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
        <div>{header}</div>
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
