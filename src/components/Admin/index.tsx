import React from 'react';
import { CovidList } from './CovidList';
import Footer from '../Footer';
import Seo from '../Seo';
import Header from '../Header';
import Layout from '../Layout';
import { AfterHeader } from '../AfterHeader';
import { SidebarAccount } from '../SidebarAccount';
export default function Admin() {
  return (
    <div className="admin">
      <Seo isRepeatable={false} postTitle="Administrare" bodyClassName="page-admin" summary="Administrare" />
      <Header />
      <AfterHeader header="admin" />

      <Layout left={<SidebarAccount />}>
        <div className="wrapper">
          <div className="contact-wrapper">
            <CovidList />
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}
