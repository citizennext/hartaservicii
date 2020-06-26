import React from 'react';
import gql from 'graphql-tag';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Content } from '../components/pages/NevoiCovid/Content';
import { AfterHeader } from '../components/AfterHeader';
import { useQuery } from '@apollo/react-hooks';
// @ts-ignore
import { NotificationManager } from 'react-notifications';
import { Ripple } from '../components/Ripple';
import Footer from '../components/Footer';
export type NevoiCovidType = {
  providers: {
    aggregate: {
      count: number;
    };
    nodes: {
      provider: {
        id: string;
        name: string;
        district: string;
        location: string;
      }[];
    };
  };
};
const pageQuery = gql`
  query {
    providers: provider_covid_needs_aggregate(where: { verified: { _eq: true } }) {
      aggregate {
        count
      }
      nodes {
        provider {
          name
          id
          district
          location
        }
      }
    }
  }
`;

export default function NevoiCovid() {
  const { loading, error, data } = useQuery<NevoiCovidType>(pageQuery);
  if (loading) return <Ripple />;

  if (error) return NotificationManager.error(error.message);

  return (
    <div>
      <Seo
        isRepeatable={false}
        postTitle="CoVid19 - Nevoi în județe"
        slug="nevoijudetecovid19"
        bodyClassName="page-contact"
        summary="Împreună putem ajuta cele mai vulnerabile grupuri sociale să depășească această criză"
      />
      <Header />
      <AfterHeader header="CoVid 19" />
      <Layout>
        <Content providers={data?.providers?.nodes} count={data?.providers?.aggregate?.count} />
      </Layout>
      <Footer />
    </div>
  );
}
