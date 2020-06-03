import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './src/context/ApolloContext';
import Auth from '@aws-amplify/auth';
import { setUser } from './src/utils/auth';
const admins = process.env.GATSBY_ADMIN_USER.split(',');

export const onRouteUpdate = (state, page, pages) => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      const userInfo = {
        ...user.attributes,
        username: user.username,
        role: admins?.includes(user.username) ? 'admin' : 'user',
        token: user.signInUserSession.idToken.jwtToken,
      };
      setUser(userInfo);
    })
    .catch((err) => window.localStorage.setItem('gatsbyUser', JSON.stringify({})));
};

export const wrapRootElement = ({ element }) => <ApolloProvider client={client}>{element}</ApolloProvider>;
