import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Spinner } from '../Spinner';

type Props = {
  service: number;
};

const FilterResults: React.FC<Props> = (props) => {
  const PROVIDERS = gql`
    query Providers($service: smallint) {
      providers(where: { _and: [{ supplier: { supplier_type: { private: { _eq: true } } } }, { type_id: { _eq: $service } }] }) {
        service {
          category {
            name
          }
        }
        supplier {
          supplier_type {
            private
          }
        }
        id
        coordinates
        address
        name
        location
        capacity
        district
        email
        license_by
        license_date_5years
        license_date_provisional
        license_no
      }
    }
  `;

  const service = props.service;
  const { loading, error, data } = useQuery(PROVIDERS, {
    variables: { service },
  });
  if (loading) return <Spinner />;
  if (error) return <p>Error! ${error}</p>;
  const providers = data.providers;

  return (
    <div>
      <p>{providers[0].name}</p>
    </div>
  );
};

export default FilterResults;
