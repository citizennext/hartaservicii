import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { PageContent } from '../components/PageContent';
import Footer from '../components/Footer';

export default class Contact extends React.Component<{ data: any }, {}> {
  render() {
    const { hasura } = this.props.data;
    return (
      <div>
        <Seo
          postTitle="Despre Noi"
          isRepeatable={false}
          postImage="https://media.graphcms.com/hIcyysxST27oQvtJkvAw"
          summary={hasura.page.summary}
        />
        <Header />
        <Layout>
          <PageContent {...hasura.page} />
        </Layout>
        <Footer />
      </div>
    );
  }
}
export const pageQuery = graphql`
  query {
    hasura {
      page(where: { slug: "despre-noi" }) {
        title
        summary
        content {
          html
        }
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
