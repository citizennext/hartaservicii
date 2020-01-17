import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Content } from '../components/pages/AboutUs/Content';
import Footer from '../components/Footer';
import { SidebarLeft } from '../components/pages/AboutUs/SidebarLeft';
import { AfterHeader } from '../components/pages/AboutUs/AfterHeader';

export default ({ data }: any) => {
  const { page } = data.hasura;
  return (
    <>
      <Seo postTitle={page.title} isRepeatable={false} postImage={page.image !== null && page.image.url} summary={page.summary} />
      <Header />
      <AfterHeader header={page.header} />
      <Layout left={<SidebarLeft sidebar={page.additionalData} />}>
        <Content {...page} />
      </Layout>
      <Footer />
    </>
  );
};

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    hasura {
      page(where: { slug: $slug }) {
        title
        summary
        content {
          html
        }
        additionalData
        header
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
