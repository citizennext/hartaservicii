import ApolloClient from 'apollo-boost';
// @ts-ignore
import fetch from 'isomorphic-fetch';

export const isBrowser = typeof window !== 'undefined';

export const client = isBrowser
  ? new ApolloClient({
      uri: process.env.GATSBY_HASURA_GRAPHQL_URL,
      fetch,
    })
  : {};
