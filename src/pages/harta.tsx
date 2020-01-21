import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { AfterHeader } from '../components/pages/AboutUs/AfterHeader';
import { ComingSoon } from '../components/ComingSoon';
import { SidebarLeft } from '../components/pages/AboutUs/SidebarLeft';

export default class HartaPage extends React.Component {
  render() {
    return (
      <div>
        <Seo
          postTitle="Noutati"
          isRepeatable={false}
          postImage="https://media.graphcms.com/hIcyysxST27oQvtJkvAw"
          summary={'test'}
          bodyClassName="page-maps"
        />
        <Header />
        <AfterHeader header={'... in lucru'} />
        <Layout left={<SidebarLeft />}>
          <ComingSoon />
        </Layout>
        <Footer />
      </div>
    );
  }
}
