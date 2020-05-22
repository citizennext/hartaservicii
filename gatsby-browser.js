import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './src/context/ApolloContext';
import Auth from '@aws-amplify/auth';
import { setUser } from './src/utils/auth';

export const onRouteUpdate = (state, page, pages) => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      const userInfo = {
        ...user.attributes,
        username: user.username,
        token: user.signInUserSession.idToken.jwtToken,
      };
      setUser(userInfo);
    })
    .catch((err) => window.localStorage.setItem('gatsbyUser', JSON.stringify({})));
};

export const wrapRootElement = ({ element }) => <ApolloProvider client={client}>{element}</ApolloProvider>;
