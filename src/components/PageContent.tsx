import React from 'react';
import Img from 'gatsby-image';
type Props = {
  header: string;
  title: string;
  content: {
    html: string;
  };
  summary: string;
  image?: any;
};
export function PageContent({ header, content, summary, image }: Props) {
  function createMarkup() {
    return { __html: content.html };
  }

  return (
    <>
      <div className="page-header">
        <span>{header}</span>
        {image && <Img fluid={image.urlSharp.childImageSharp.fluid} />}
      </div>
      <div className="summary">{summary}</div>
      <div className="content" dangerouslySetInnerHTML={createMarkup()} />
    </>
  );
}
