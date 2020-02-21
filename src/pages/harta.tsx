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
        const providerId = location.state && location.state.providerId;
        // console.log('TCL: HartaPage -> providerId', providerId);
        return (
          <>
            <Seo bodyClassName="page-harta" />
            <Header headerClassName="page-harta" />
            <Layout>
              {providerId && (
                <Dialog
                  aria-label="detalii serviciu"
                  isOpen={providerId != null}
                  onDismiss={() => {
                    navigate('/harta');
                  }}>
                  <PopUps path="harta/serviciu/:provider" provider={providerId} />
                </Dialog>
              )}
              <Router location={location}>
                <Harta path="harta/?judet=:judet&a=:b&bjkll" />
                <Provider path="harta/serviciu/:provider" />
              </Router>
            </Layout>
          </>
        );
      }}
    </Location>
  );
}
export default HartaPage;
