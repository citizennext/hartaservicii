import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AfterHeader } from '../components/AfterHeader';
import { Hasura } from '../types/graphqlTypes';
export default ({ data }: { data: { hasura: Hasura } }) => {
  const { blog } = data?.hasura;
  if (!blog) return;
  return (
    <>
      <Seo postTitle={blog.title} isRepeatable={true} postImage={blog?.image?.url} summary={blog.summary} />
      <Header />
      <AfterHeader />
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
