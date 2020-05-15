import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { isEmpty } from 'ramda';

import { useParams } from '@reach/router';
import { Spinner } from '../Spinner';
import { Covid } from './Covid';
// @ts-ignore
import { NotificationContainer } from 'react-notifications';

export const GET_COVID_NEEDS = gql`
  query MyCovidNeeds($provider: uuid!) {
    provider_covid_needs(where: { provider_id: { _eq: $provider } }, order_by: { created_at: desc }) {
      id
      created_at
      verified
    }
  }
`;

export function CovidList() {
  const params = useParams();
  const userStorage = localStorage.getItem('gatsbyUser');
  const userId = userStorage && !isEmpty(userStorage) && JSON.parse(userStorage).username;
  const token = userStorage && !isEmpty(userStorage) && JSON.parse(userStorage).token;

  const { loading, error, data } = useQuery(GET_COVID_NEEDS, {
    variables: { provider: params.id },
    context: {
      headers: {
        'x-hasura-user-id': userId,
        'x-hasura-role': userId === 'cezar' ? 'admin' : 'user',
        Authorization: `Bearer ${token}`,
      },
    },
  });
  if (loading) return <Spinner />;
  if (error) return <p>Error! ${error.message}</p>;

  const { provider_covid_needs } = data;

  return (
    <div>
      <NotificationContainer />
      <ul className="w-3/4 no-underline mt-24 rounded-lg bg-snow p-6">
        <h3 className="mb-4">Formulare nevoi protecție #covid</h3>
        {provider_covid_needs.length > 0 ? (
          provider_covid_needs.map((covid: any) => <Covid key={covid.id} covid={covid} providerId={params.id} />)
        ) : (
          <li>Momentan nu sunt înregistrate nevoi de protecție!</li>
        )}
      </ul>
    </div>
  );
}
