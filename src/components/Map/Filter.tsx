import React, { useState } from 'react';
import Select from 'react-select';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
// @ts-ignore
import { NotificationManager } from 'react-notifications';
import Drawer from '../Drawer/Drawer';
import { useWindowSize } from '../../hooks/useWindowSize';
import { FilterMenu } from '../Icons';
import options from '../../data/filter-options.json';
import { Spinner } from '../Spinner';

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

const SERVICES = gql`
  query MyQuery($where: services_bool_exp!) {
    services: services(where: $where) {
      name
    }
    categories: categories {
      name
    }
    districts: suppliers(distinct_on: district, where: { district: { _is_null: false } }) {
      district
    }
  }
`;

const Filter: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openDrawer = () => {
    setIsOpen((current: boolean) => !current);
  };
  const windowSize = useWindowSize();
  const filters = props.filters;
  const isDisabled = filters.service == null ? true : false;

  const [selectedCategory, setSelectedCategory] = useState(null);

  const { loading, error, data } = useQuery(SERVICES, {
    variables: { where: { category: { name: selectedCategory ? { _eq: selectedCategory } : {} } } },
  });
  if (loading) return <Spinner />;
  if (error) {
    NotificationManager.error(error.message);
  }

  const districts = data?.districts?.map((item: { [name: string]: string }) => {
    return { value: item.district, label: item.district };
  });
  districts?.unshift({ value: null, label: 'Toate judetele' });

  const optionsService = data?.categories?.map((item: { [name: string]: string }) => {
    return { value: item.name, label: item.name };
  });
  optionsService?.unshift({ value: null, label: 'Toate categoriile de servicii' });

  const optionsSpecialization = data?.services?.map((item: { [name: string]: string }) => {
    return { value: item.name, label: item.name };
  });
  optionsSpecialization?.unshift({ value: null, label: 'Toate specializarile' });

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
      {data &&
        (props.drawer && windowSize.width && windowSize.width < 768 ? (
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
                  value={districts?.filter(({ value }: any) => value === filters.district)}
                  options={districts}
                  onChange={handleChangeDistrict}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: '#CEE6C1',
                      primary: '#6FBBB7',
                    },
                  })}
                />
                <Select
                  value={options.age.filter(({ value }) => value === filters.category)}
                  options={options.age}
                  onChange={handleChangeAge}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: '#CEE6C1',
                      primary: '#6FBBB7',
                    },
                  })}
                />
                <Select
                  value={optionsService.filter(({ value }: any) => value === filters.service)}
                  options={optionsService}
                  onChange={handleChangeService}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: '#CEE6C1',
                      primary: '#6FBBB7',
                    },
                  })}
                />
                <Select
                  isDisabled={isDisabled}
                  value={optionsSpecialization.filter(({ value }: any) => value === filters.specialization)}
                  options={optionsSpecialization}
                  onChange={handleChangeSpecialization}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: '#cee6c1',
                      primary: '#6fbbb7',
                    },
                  })}
                />
                <Select
                  options={options.administrator}
                  onChange={handleChangeAdministrator}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: '#cee6c1',
                      primary: '#6fbbb7',
                    },
                  })}
                />
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
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#cee6c1',
                    primary: '#6fbbb7',
                  },
                })}
              />
            </div>
            <div className="select-container">
              <label>Beneficiari</label>
              <Select
                value={options.age.filter(({ value }) => value === filters.category)}
                options={options.age}
                onChange={handleChangeAge}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#cee6c1',
                    primary: '#6fbbb7',
                  },
                })}
              />
            </div>
            <div className="select-container">
              <label>Tip servicii sociale</label>
              <Select
                value={optionsService.filter(({ value }: any) => value === filters.service)}
                options={optionsService}
                onChange={handleChangeService}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#cee6c1',
                    primary: '#6fbbb7',
                  },
                })}
              />
            </div>
            <div className="select-container">
              <label>Tip specializare</label>
              <Select
                isDisabled={isDisabled}
                value={optionsSpecialization.filter(({ value }: any) => value === filters.specialization)}
                options={optionsSpecialization}
                onChange={handleChangeSpecialization}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#cee6c1',
                    primary: '#6fbbb7',
                  },
                })}
              />
            </div>
            <div className="select-container">
              <label>Administrator</label>
              <Select
                value={options.administrator.filter(({ value }) => value === filters.administrator)}
                options={options.administrator}
                onChange={handleChangeAdministrator}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#cee6c1',
                    primary: '#6fbbb7',
                  },
                })}
              />
            </div>
            <div className="pin-number select-container">
              <label>Total centre</label>
              {props.totalResults}
            </div>
          </div>
        ))}
    </>
  );
};

export default Filter;
