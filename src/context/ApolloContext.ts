import ApolloClient from 'apollo-boost';
// @ts-ignore
import fetch from 'isomorphic-fetch';
import { navigate } from '@reach/router';
import { getAccessToken } from '../utils/auth';
// @ts-ignore
import { NotificationManager } from 'react-notifications';

export const isBrowser = typeof window !== 'undefined';

export const client = isBrowser
  ? new ApolloClient({
      uri: process.env.GATSBY_HASURA_GRAPHQL_URL,
      onError: ({ graphQLErrors, networkError, operation, forward }) => {
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
      },
      fetch,
    })
  : {};
