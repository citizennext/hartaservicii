import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AfterHeader } from '../components/AfterHeader';

export default ({ data }: any) => {
  const { blog } = data.hasura;
  return (
    <>
      <Seo postTitle={blog.title} isRepeatable={true} postImage={blog.image.url} summary={blog.summary} />
      <Header />
      <AfterHeader header={blog.header} />
      <Footer />
    </>
  );
};

export const pageQuery = graphql`
  query blogPostBySlug($slug: String!) {
    hasura {
      blog(where: { slug: $slug }) {
        title
        summary
        content {
          html
        }
        publishedAt
        slug
        image {
          url
          urlSharp {
            childImageSharp {
              fluid(maxHeight: 350, maxWidth: 770) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
