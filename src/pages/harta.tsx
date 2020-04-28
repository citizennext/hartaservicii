import React from 'react';
import { Router, Location } from '@reach/router';
import { Dialog } from '@reach/dialog';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Harta from '../components/Map';
import PrivateRoute from '../components/PrivateRoute';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import UserProfile from '../components/UserProfile';
import Provider from '../components/Map/Provider';
import RatingReview from '../components/Map/RatingReview';
import PopUps from '../components/Map/PopUps';
function HartaPage() {
  return (
    <Location>
      {({ location, navigate }) => {
        const { oldLocation } = location?.state || {};
        return (
          <>
            <Seo isRepeatable={false} slug="harta" postTitle="Harta Serviciilor" bodyClassName="page-harta" />
            <Header mapHeader={true} />
            <Layout>
              <Router location={oldLocation ? oldLocation : location} basepath="/harta">
                <Harta path="/" />
                <Provider path="serviciu/:provider/:id" />
                <PrivateRoute path="serviciu/:provider/:id/rating" component={RatingReview} />
                <PrivateRoute path="/profile" component={UserProfile} />
                <SignIn path="/login" />
                <SignUp path="/signup" />
              </Router>

              <Dialog
                aria-label="detalii serviciu"
                isOpen={!!oldLocation}
                onDismiss={() => {
                  navigate(oldLocation.pathname);
                }}>
                <Router location={location} basepath="/harta">
                  <Harta path="/" />
                  <PrivateRoute path="/rating" component={RatingReview} />
                  <PrivateRoute path="/profile" component={UserProfile} />
                  <SignIn path="/login" />
                  <SignUp path="/signup" />
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
