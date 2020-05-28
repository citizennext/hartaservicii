import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
// @ts-ignore
import fetch from 'isomorphic-fetch';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { navigate } from '@reach/router';
import { getAccessToken } from '../utils/auth';
// @ts-ignore
import { NotificationManager } from 'react-notifications';

export const isBrowser = typeof window !== 'undefined';
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors)
    graphQLErrors.map(async ({ extensions }) => {
      switch (extensions?.code) {
        case 'data-exception':
        case 'validation-failed':
          navigate('/something-went-wrong');
          break;
        case 'invalid-jwt': {
          // refetch the jwt
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
          NotificationManager.error('Eroare! Ne pare rău! Reîncarcă pagina și mai încearca odata!');
      }
    });
  if (networkError) {
    navigate('/network-error');
  }
});

const httpLink = new HttpLink({
  uri: process.env.GATSBY_HASURA_GRAPHQL_URL,
  fetch,
});
export const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
});
