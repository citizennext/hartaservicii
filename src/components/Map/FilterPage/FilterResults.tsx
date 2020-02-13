import React, { useState } from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Providers from '../index';
import Filter from './Filter';
import FilterOptions from '../../../data/filter-options.json';

type Props = {
}

const FilterResults: React.FC<Props> = () => {
    const PROVIDERS = gql`
        query Providers($service: smallint){
            providers( 
                where: {
                    _and: [
                        { supplier: { supplier_type: { private: { _eq: true } } } }
                        { type_id: {  _eq: $service } }
                    ]
                } ) 
                {
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
        }`;

    // const [filters, setFilters] = useState({ ageValue: null, service: null });
    const [service, setService] = useState(null);
      
    const { loading, error, data } = useQuery(PROVIDERS, {
        variables: { service: service },
    });
    if (loading) return(<p>Loading...</p>);
    if (error) return(<p>Error! ${error}</p>);

    const providers = data.providers

    const handleFilterChange= (filterProperty: object) => {
        const keyFilter = Object.keys(filterProperty)[0]
        switch (keyFilter) {
            case 'service': 
                setService(Object.values(filterProperty)[0])
                break;
        }
    }
    
    return ( 
        <>
            <Providers providers={providers} />
                <Filter
                    filterClass="filter-options"
                    options={Object.values(FilterOptions)}
                    drawer={true}
                    // filters={filters}
                    onFilterChange={handleFilterChange}
                />
        </>
    );
}

export default FilterResults;