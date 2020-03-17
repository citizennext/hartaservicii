import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Content } from '../components/pages/Noutati/Content';
import { AfterHeader } from '../components/AfterHeader';
import Footer from '../components/Footer';

export default class Noutati extends React.Component<{ data: any }, {}> {
  render() {
    const { hasura } = this.props.data;
    return (
      <>
        <Seo
          postTitle="Noutati"
          isRepeatable={false}
          postImage="https://media.graphcms.com/hIcyysxST27oQvtJkvAw"
          summary={'test'}
          bodyClassName="page-blog"
        />
        <Header />
        {hasura.featured.length > 0 ? <AfterHeader hasTopSeparator={false} hasBottomSeparator={false} /> : <></>}
        <Layout>
          <Content {...hasura} />
        </Layout>
        <Footer />
      </>
    );
  }
}

export const pageQuery = graphql`
  query {
    hasura {
      featured: blogs(last: 2, where: { featured: true }) {
        id
        title
        summary
        slug
        createdAt
        image {
          url
          urlSharp {
            childImageSharp {
              fluid(maxWidth: 370, maxHeight: 190) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      regular: blogs(last: 8, where: { featured: false }) {
        id
        title
        summary
        slug
        createdAt
        image {
          url
          urlSharp {
            childImageSharp {
              fluid(maxWidth: 370, maxHeight: 190) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
