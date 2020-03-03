import React from 'react';
import { Router, Location } from '@reach/router';
import { Dialog } from '@reach/dialog';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Harta from '../components/Map';
import Provider from '../components/Map/Provider';
import PopUps from '../components/Map/PopUps';
function HartaPage() {
  return (
    <Location>
      {({ location, navigate }) => {
        const { oldLocation } = location?.state || {};
        return (
          <>
            <Seo bodyClassName="page-harta" />
            <Header mapHeader />
            <Layout>
              <Router location={oldLocation ? oldLocation : location} basepath="/harta">
                <Harta path="/" />
                <Provider path="serviciu/:provider/:id" />
              </Router>

              <Dialog
                aria-label="detalii serviciu"
                isOpen={!!oldLocation}
                onDismiss={() => {
                  navigate(oldLocation.pathname);
                }}>
                <Router location={location} basepath="/harta">
                  <Harta path="/" />
                  <PopUps
                    path="serviciu/:provider/:id"
                    onDismiss={() => {
                      navigate(-1);
                    }}
                  />
                </Router>
              </Dialog>
            </Layout>
          </>
        );
      }}
    </Location>
  );
}
export default HartaPage;
