import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Content } from '../components/pages/Noutati/Content';
import { AfterHeader } from '../components/pages/Noutati/AfterHeader';
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
        {hasura.blogs.filter((item: { featured: boolean }) => item.featured).length ? <AfterHeader /> : <></>}
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
      blogs(last: 10) {
        id
        title
        summary
        slug
        featured
        createdAt
        image {
          url
          urlSharp {
            childImageSharp {
              fluid(maxWidth: 410) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
