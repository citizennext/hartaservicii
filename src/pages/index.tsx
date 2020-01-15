import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import HomePageContent from '../components/pages/HomePage/Content';
import Footer from '../components/Footer';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Seo isRepeatable={false} postTitle="Bine ai venit!" className="page-homepage" />
        <Header />
        <Layout>
          <HomePageContent />
        </Layout>
        <Footer />
      </div>
    );
  }
}
