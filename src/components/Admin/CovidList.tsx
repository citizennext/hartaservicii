import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { getUser } from '../../utils/auth';
import { useParams, Link } from '@reach/router';
import { Spinner } from '../Spinner';
import { Covid } from './Covid';
// @ts-ignore
import { NotificationContainer } from 'react-notifications';

export const GET_COVID_NEEDS = gql`
  query MyCovidNeeds($provider: uuid!, $userId: String) {
    provider_covid_needs(
      where: { provider_id: { _eq: $provider }, user: { id: { _eq: $userId } } }
      order_by: { created_at: desc }
    ) {
      id
      created_at
      updated_at
      verified
    }
  }
`;

export function CovidList() {
  const params = useParams();
  const userObject = getUser();
  const userId = userObject && userObject.username;
  const token = userObject && userObject.token;
  const role = userObject && userObject.role;

  const { loading, error, data } = useQuery(GET_COVID_NEEDS, {
    variables: { provider: params.id, userId: role !== 'admin' ? userId : null },
    fetchPolicy: 'cache-and-network',
    context: {
      headers: {
        'x-hasura-role': role,
        'X-Hasura-User-Id': userId,
        authorization: `Bearer ${token}`,
      },
    },
  });
  if (loading) return <Spinner />;
  if (error) return <p>Error! ${error.message}</p>;

  const { provider_covid_needs } = data;

  return (
    <div>
      <NotificationContainer />
      <ul className="md:w-3/4 no-underline mt-24 rounded-lg bg-snow p-6">
        <h3 className="mb-4">Formulare nevoi protecție #covid</h3>
        {provider_covid_needs.length > 0 ? (
          provider_covid_needs.map((covid: any) => <Covid key={covid.id} covid={covid} providerId={params.id} />)
        ) : (
          <li>Momentan nu sunt înregistrate nevoi de protecție!</li>
        )}
        <Link className="btn btn-celeste mx-auto md:w-1/2 mt-6" to="nevoi-covid/adauga">
          Adaugă nevoi
        </Link>
      </ul>
    </div>
  );
}
