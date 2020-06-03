import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from '@reach/router';
import gql from 'graphql-tag';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { CovidList } from './CovidList';
import { Claim } from './Claim';
import { Ripple } from '../Ripple';
import Footer from '../Footer';
import Seo from '../Seo';
import Header from '../Header';
import Layout from '../Layout';
import { AfterHeader } from '../AfterHeader';
import { SidebarAccount } from '../SidebarAccount';
import { getUser } from '../../utils/auth';
const providerQuery = gql`
  query Provider($id: uuid!) {
    providers_by_pk(id: $id) {
      name
      supplier {
        name
      }
      provider_covid_needs {
        user {
          id
        }
      }
    }
  }
`;
export default function Admin() {
  const params = useParams();
  const user = getUser();
  const isAdmin = user?.role === 'admin';
  const provider = useQuery<{
    providers_by_pk: { name: string; supplier: { name: string }; provider_covid_needs: { user: { id: string } }[] };
  }>(providerQuery, {
    variables: { id: params.id },
  });
  if (provider.loading) <Ripple />;
  if (provider.error) {
    NotificationManager.error(provider.error.message);
  }

  const isProviderClaimed =
    provider?.data?.providers_by_pk?.provider_covid_needs[0] &&
    user?.username !== provider?.data?.providers_by_pk?.provider_covid_needs[0]?.user?.id;

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
            {isAdmin || !isProviderClaimed ? <CovidList /> : <Claim />}
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}
