import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Content from '../components/pages/SearchResult/Content';
import Footer from '../components/Footer';

export default class SearchResultPage extends React.Component {
  search = () => 'Search Results Page';

  render() {
    return (
      <div>
        <Seo isRepeatable={false} postTitle="Bine ai venit!" bodyClassName="page-search-reesult" />
        <Header />
        <Layout>
          <Content />
        </Layout>
        <Footer />
      </div>
    );
  }
}
