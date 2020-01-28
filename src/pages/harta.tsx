import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default class HartaPage extends React.Component {
  render() {
    return (
      <div>
        <Seo bodyClassName="page-maps" />
        <Header />
        <Layout>coming soon</Layout>
        <Footer />
      </div>
    );
  }
}
