import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'https://hasura.serviciisociale.ro/v1/graphql',
  fetch,
});