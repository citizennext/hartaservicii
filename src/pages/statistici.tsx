import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Content } from '../components/pages/Statistici/Content';
import Footer from '../components/Footer';

export default class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <Seo
          isRepeatable={false}
          postTitle="Statistici"
          summary="Câteva statistici rezultate din datele din platformă"
          bodyClassName="page-statistici"
        />
        <Header />
        <Layout>
          <Content />
        </Layout>
        <Footer />
      </div>
    );
  }
}
