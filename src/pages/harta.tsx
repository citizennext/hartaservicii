import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import HartaContent from '../components/pages/Harta/Content';

export default class HartaPage extends React.Component {
  render() {
    return (
      <>
        <Seo bodyClassName="page-harta" />
        <Header />
        <Layout>
          <HartaContent />
        </Layout>
      </>
    );
  }
}
