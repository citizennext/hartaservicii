/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SidebarLeft from '../components/pages/Test/SidebarLeft';
import SidebarRight from '../components/pages/Test/SidebarRight';
import TestContent from '../components/pages/Test/Content';
import Footer from '../components/Footer';

export default class TestPage extends React.Component {
  render() {
    return (
      <div>
        <Seo page="test" className="page-test" />
        <Header />
        <Layout left={<SidebarLeft />} right={<SidebarRight />}>
          <TestContent />
        </Layout>
        <Footer />
      </div>
    );
  }
}
