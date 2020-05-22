import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { isEmpty } from 'ramda';
// @ts-ignore
import fetch from 'isomorphic-fetch';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { navigate } from '@reach/router';
import { getAccessToken } from '../utils/auth';
// @ts-ignore
import { NotificationManager } from 'react-notifications';

export const isBrowser = typeof window !== 'undefined';
const userStorage = isBrowser && localStorage.getItem('gatsbyUser');
const token = isBrowser && userStorage && !isEmpty(userStorage) && JSON.parse(userStorage).token;

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors)
        graphQLErrors.map(async ({ extensions }) => {
          // @ts-ignore
          switch (extensions.code) {
            case 'invalid-jwt': {
              const oldHeaders = operation.getContext().headers;
              const token = await getAccessToken();
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  Authorization: `Bearer ${token}`,
                },
              });
              // retry the request, returning the new observable
              return forward(operation);
            }
            default:
              // default case
              NotificationManager.error('Eroare! Ne pare rău! Reîncarcă pagina și mai încearca odata!');
          }
        });
      if (networkError) {
        navigate('/network-error');
      }
    }),
    new HttpLink(
      token
        ? {
            uri: process.env.GATSBY_HASURA_GRAPHQL_URL,
            headers: {
              Authorization: `Bearer ${token}`,
            },
            fetch,
          }
        : {
            uri: process.env.GATSBY_HASURA_GRAPHQL_URL,
            fetch,
          }
    ),
  ]),
  cache: new InMemoryCache(),
});
