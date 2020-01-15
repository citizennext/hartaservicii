/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import TestContent from '../components/pages/Harta/Content';
import Footer from '../components/Footer';

export default class HartaPage extends React.Component {
  render() {
    return (
      <div>
        <Seo page="test" className="page-maps" />
        <Header />
        <Layout>
          <TestContent />
        </Layout>
        <Footer />
      </div>
    );
  }
}
