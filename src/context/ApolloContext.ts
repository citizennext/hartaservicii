import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { navigate } from '@reach/router';
import { getAccessToken } from '../utils/auth';
// @ts-ignore
import { NotificationManager } from 'react-notifications';

export const isBrowser = typeof window !== 'undefined';

export const client = isBrowser
  ? new ApolloClient({
      link: ApolloLink.from([
        onError(({ graphQLErrors, networkError, operation, forward }) => {
          if (graphQLErrors)
            graphQLErrors.map(({ extensions }) => {
              // @ts-ignore
              switch (extensions.code) {
                case 'invalid-jwt': {
                  const oldHeaders = operation.getContext().headers;
                  const token = getAccessToken();
                  operation.setContext({
                    headers: {
                      ...oldHeaders,
                      authorization: `Bearer ${token}`,
                    },
                  });
                  // retry the request, returning the new observable
                  forward(operation);
                  break;
                }
                default:
                  // default case
                  NotificationManager.error('Ne pare rău! Mai încearca odata!');
              }
            });
          if (networkError) {
            navigate('/network-error');
          }
        }),
        new HttpLink({
          uri: process.env.GATSBY_HASURA_GRAPHQL_URL,
          credentials: 'same-origin', //not sure is needed
        }),
      ]),
      cache: new InMemoryCache(),
    })
  : {};
