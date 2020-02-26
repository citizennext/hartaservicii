import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { InstaSearchPage } from '../components/pages/SearchResult/Content';
import Footer from '../components/Footer';

function SearchResultPage() {
  return (
    <div>
      <Seo isRepeatable={false} postTitle="Bine ai venit!" bodyClassName="page-search-reesult" />
      <Header />
      <Layout>
        <InstaSearchPage />
      </Layout>
      <Footer />
    </div>
  );
}
export default SearchResultPage;
