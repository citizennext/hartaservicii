import React from 'react';
import { Router, Location } from '@reach/router';
import { Dialog } from '@reach/dialog';

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
            <Router location={oldLocation ? oldLocation : location} basepath="/harta">
              <Harta path="/" />
              <Provider path="serviciu/:provider/:id/" />
              <PrivateRoute path="serviciu/:provider/:id/rating" component={RatingReview} />
              <PrivateRoute path="profile" component={UserProfile} />
              <SignIn path="login" />
              <SignUp path="inregistrare" />
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
                  path="serviciu/:provider/:id/"
                  onDismiss={() => {
                    navigate('/harta');
                  }}
                />
              </Router>
            </Dialog>
          </>
        );
      }}
    </Location>
  );
}
export default HartaPage;
