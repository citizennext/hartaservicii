import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Content } from '../components/pages/Covid/Content';
import { AfterHeader } from '../components/AfterHeader';
import Footer from '../components/Footer';
export interface Needs {
  id: string;
  county: string;
  surgicalMasks: number;
  surgicalHandgloves: number;
  handDesinfectant: number;
  surfaceDesinfectant: number;
  masks: number;
  visors: number;
  chlor: number;
  surgicalGown: number;
  sanitaryAlchohol: number;
  surgicalShoeProtection: number;
  protectionGlasses: number;
  protectionHood: number;
  surgicalGownSingleUse: number;
}
type Props = {
  hasura: { county_covid_needs: Needs[] };
};
export default class ContactPage extends React.Component<{ data: Props }, {}> {
  render() {
    const { hasura } = this.props.data;
    return (
      <div>
        <Seo isRepeatable={false} postTitle="Contact" bodyClassName="page-contact" />
        <Header />
        <AfterHeader header="CoVid 19" />
        <Layout>
          <Content counties={hasura.county_covid_needs} />
        </Layout>
        <Footer />
      </div>
    );
  }
}
export const pageQuery = graphql`
  query {
    hasura {
      county_covid_needs {
        id
        county
        surgicalMasks
        surgicalHandgloves
        handDesinfectant
        surfaceDesinfectant
        masks
        visors
        chlor
        surgicalGown
        sanitaryAlchohol
        surgicalShoeProtection
        protectionGlasses
        protectionHood
        surgicalGownSingleUse
      }
    }
  }
`;
