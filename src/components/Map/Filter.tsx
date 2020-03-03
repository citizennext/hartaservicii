import React, { useState } from 'react';
import Select from 'react-select';
import Drawer from '../Drawer/Drawer';
import { useWindowSize } from '../../hooks/useWindowSize';
import { FilterMenu } from '../Icons';
import options from '../../data/filter-options.json';
import { graphql, useStaticQuery } from 'gatsby';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

type FilterObject = {
  district?: string | null;
  category?: string | null;
  service?: string | null;
  specialization?: string | null;
  administrator?: boolean | null;
};

type Props = {
  filterClass?: string;
  options: any;
  drawer: boolean;
  onFilterChange: any;
  filters: FilterObject;
  totalResults: number;
};

const useServices = () => {
  const { hasura } = useStaticQuery(
    graphql`
      query {
        hasura {
          categories: categories {
            name
          }
          districts: suppliers(distinct_on: district, where: { district: { _is_null: false } }) {
            district
          }
        }
      }
    `
  );
  return hasura;
};

const SERVICES = gql`
  query MyQuery($selectedCategory: String) {
    services: services(where: { category: { name: { _eq: $selectedCategory } } }) {
      name
    }
  }
`;

const Filter: React.FC<Props> = props => {
  const [isOpen, setIsOpen] = useState(false);
  const openDrawer = () => {
    setIsOpen((current: boolean) => !current);
  };
  const windowSize = useWindowSize();
  const filters = props.filters;
  const isDisabled = filters.service == null ? true : false;

  const [selectedCategory, setSelectedCategory] = useState(null);

  const query = useServices();

  const districts = query.districts.map((item: { [name: string]: string }) => {
    return { value: item.district, label: item.district };
  });
  districts.unshift({ value: null, label: 'Toate judetele' });

  const optionsService = query.categories.map((item: { [name: string]: string }) => {
    return { value: item.name, label: item.name };
  });
  optionsService.unshift({ value: null, label: 'Toate categoriile de servicii' });

  const { loading, error, data } = useQuery(SERVICES, {
    variables: { selectedCategory: selectedCategory },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error}</p>;

  const services = data.services;

  const optionsSpecialization = services.map((item: { [name: string]: string }) => {
    return { value: item.name, label: item.name };
  });
  optionsSpecialization.unshift({ value: null, label: 'Toate specializarile' });

  function handleChangeDistrict(newValue: any) {
    props.onFilterChange({ district: newValue.value });
  }

  function handleChangeAge(newValue: any) {
    props.onFilterChange({ category: newValue.value });
  }

  function handleChangeService(newValue: any) {
    if (newValue.value == null) {
      props.onFilterChange({ service: newValue.value, specialization: null });
    } else {
      props.onFilterChange({ service: newValue.value });
    }
    setSelectedCategory(newValue.value);
  }

  function handleChangeSpecialization(newValue: any) {
    props.onFilterChange({ specialization: newValue.value });
  }

  function handleChangeAdministrator(newValue: any) {
    props.onFilterChange({ administrator: newValue.value });
  }

  return (
    <>
      {props.drawer && windowSize.width && windowSize.width < 768 ? (
        <div className="filter-menu" data-open={isOpen}>
          <FilterMenu size={20} className="filter-menu-icon" />
          <Drawer
            className="map-drawer map-filters"
            width={windowSize.width < 375 ? '260px' : '300px'}
            placement="right"
            open={isOpen}
            closeButtonStyle={{}}
            toggleHandler={openDrawer}
            closeButton={<FilterMenu className="close" size={20} />}>
            <div className="select-options">
              <div className="pin-number">{props.totalResults}</div>
              <Select
                value={districts.filter(({ value }: any) => value === filters.district)}
                options={districts}
                onChange={handleChangeDistrict}
              />
              <Select
                value={options.age.filter(({ value }) => value === filters.category)}
                options={options.age}
                onChange={handleChangeAge}
              />
              <Select
                value={optionsService.filter(({ value }: any) => value === filters.service)}
                options={optionsService}
                onChange={handleChangeService}
              />
              <Select
                isDisabled={isDisabled}
                value={optionsSpecialization.filter(({ value }: any) => value === filters.specialization)}
                options={optionsSpecialization}
                onChange={handleChangeSpecialization}
              />
              <Select options={options.administrator} onChange={handleChangeAdministrator} />
            </div>
          </Drawer>
        </div>
      ) : (
        <div className="select-options">
          <div className="select-container">
            <label>Judet</label>
            <Select
              value={districts.filter(({ value }: any) => value === filters.district)}
              options={districts}
              onChange={handleChangeDistrict}
            />
          </div>
          <div className="select-container">
            <label>Beneficiari</label>
            <Select
              value={options.age.filter(({ value }) => value === filters.category)}
              options={options.age}
              onChange={handleChangeAge}
            />
          </div>
          <div className="select-container">
            <label>Tip servicii sociale</label>
            <Select
              value={optionsService.filter(({ value }: any) => value === filters.service)}
              options={optionsService}
              onChange={handleChangeService}
            />
          </div>
          <div className="select-container">
            <label>Tip specializare</label>
            <Select
              isDisabled={isDisabled}
              value={optionsSpecialization.filter(({ value }: any) => value === filters.specialization)}
              options={optionsSpecialization}
              onChange={handleChangeSpecialization}
            />
          </div>
          <div className="select-container">
            <label>Administrator</label>
            <Select
              value={options.administrator.filter(({ value }) => value === filters.administrator)}
              options={options.administrator}
              onChange={handleChangeAdministrator}
            />
          </div>
          <div className="pin-number select-container">
            <label>Total centre</label>
            {props.totalResults}
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;