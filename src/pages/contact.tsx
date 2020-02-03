import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Content } from '../components/pages/Contact/Content';
import { AfterHeader } from '../components/AfterHeader';
import Footer from '../components/Footer';

export default class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <Seo isRepeatable={false} postTitle="Bine ai venit!" bodyClassName="page-contact" />
        <Header />
        <AfterHeader header="contact" />
        <Layout>
          <Content />
        </Layout>
        <Footer />
      </div>
    );
  }
}
