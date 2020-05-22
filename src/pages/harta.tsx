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
import AddCovidNeeds from '../components/Admin/AddCovidNeeds';
import EditCovidNeeds from '../components/Admin/EditCovidNeeds';
import Admin from '../components/Admin';
import PopUps from '../components/Map/PopUps';
import Amplify from 'aws-amplify';
Amplify.configure({
  Auth: {
    identityPoolId: process.env.GATSBY_IDENTITY_POOL_ID,
    region: process.env.GATSBY_REGION,
    identityPoolRegion: process.env.GATSBY_REGION,
    userPoolId: process.env.GATSBY_USER_POOL_ID,
    userPoolWebClientId: process.env.GATSBY_USER_POOL_WEB_CLIENT_ID,
  },
});
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
              <PrivateRoute path="serviciu/:provider/:id/administrare/nevoi-covid/adauga" component={AddCovidNeeds} />
              <PrivateRoute path="serviciu/:provider/:id/administrare/nevoi-covid/edit/:needId" component={EditCovidNeeds} />
              <PrivateRoute path="serviciu/:provider/:id/administrare" component={Admin}></PrivateRoute>
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
