import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from '@reach/router';
import gql from 'graphql-tag';
import { CovidList } from './CovidList';
import { Ripple } from '../Ripple';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Footer from '../Footer';
import Seo from '../Seo';
import Header from '../Header';
import Layout from '../Layout';
import { AfterHeader } from '../AfterHeader';
import { SidebarAccount } from '../SidebarAccount';

const providerQuery = gql`
  query Provider($id: uuid!) {
    providers_by_pk(id: $id) {
      name
      supplier {
        name
      }
    }
  }
`;
export default function Admin() {
  const params = useParams();

  const provider = useQuery<{ providers_by_pk: { name: string; supplier: { name: string } } }>(providerQuery, {
    variables: { id: params.id },
  });
  if (provider.loading) <Ripple />;
  if (provider.error) {
    NotificationManager.error(provider.error.message);
  }
  return (
    <div className="admin">
      <Seo isRepeatable={false} postTitle="Administrare" bodyClassName="page-admin" summary="Administrare" />
      <Header />
      <AfterHeader header="admin" />
      <NotificationContainer />
      <Layout left={<SidebarAccount />}>
        <div className="wrapper">
          <div className="contact-wrapper">
            <h1 className="mt-4 xl:mt-24 mb-4">Pagina de administrare a serviciului:</h1>
            <h2 className="text-4xl font-light pt-0  text-celeste">{provider?.data?.providers_by_pk?.name}</h2>
            <h3 className="pb-0  text-brown">{provider?.data?.providers_by_pk?.supplier?.name}</h3>

            <CovidList />
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}
