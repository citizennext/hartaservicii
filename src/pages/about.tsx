import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Content } from '../components/pages/AboutUs/Content';
import Footer from '../components/Footer';
import { SidebarLeft } from '../components/pages/AboutUs/SidebarLeft';
import { AfterHeader } from '../components/pages/AboutUs/AfterHeader';

export default class AboutUs extends React.Component<{ data: any }, {}> {
  render() {
    const { hasura } = this.props.data;
    return (
      <>
        <Seo
          postTitle="Despre Noi"
          isRepeatable={false}
          postImage="https://media.graphcms.com/hIcyysxST27oQvtJkvAw"
          summary={hasura.page.summary}
          bodyClassName="page-about-us"
        />
        <Header />
        <AfterHeader header={hasura.page.header} />
        <Layout left={<SidebarLeft sidebar={hasura.page.additionalData} />}>
          <Content {...hasura.page} />
        </Layout>
        <Footer />
      </>
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
