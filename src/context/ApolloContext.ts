import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { isEmpty } from 'ramda';

import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { navigate } from '@reach/router';
import { getAccessToken } from '../utils/auth';
// @ts-ignore
import { NotificationManager } from 'react-notifications';
const userStorage = localStorage.getItem('gatsbyUser');
const token = userStorage && !isEmpty(userStorage) && JSON.parse(userStorage).token;

export const isBrowser = typeof window !== 'undefined';

export const client = isBrowser
  ? new ApolloClient({
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
                credentials: 'same-origin', //not sure is needed
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            : {
                uri: process.env.GATSBY_HASURA_GRAPHQL_URL,
                credentials: 'same-origin',
              }
        ),
      ]),
      cache: new InMemoryCache(),
    })
  : {};