import React, { useContext, useState } from 'react';
import Select from 'react-select';
import Drawer from '../../Drawer/Drawer';
import { DrawerContext } from '../../Drawer/DrawerContext';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { FilterMenu } from '../../Icons';
import providerData from '../../../data/providers-data.json';

// type OptionType = { [key: string]: any }
// type OptionsType = Array<OptionType>

type Props = {
  filterClass?: string;
  options: any;
  drawer: boolean;
  data: any
  onFilterChange: any
  filters: any
};

const Filter: React.FC<Props> = props => {
  const options = [
    { "value": null, "label": "Toate vârstele" },
    { "value": "copii", "label": "Copii" },
    { "value": "tineri", "label": "Tineri" }
  ]

  // @ts-ignore
  const { state, dispatch } = useContext(DrawerContext);
  const openDrawer = () => {
    dispatch((current: boolean) => !current);
  };
  const windowSize = useWindowSize();

  function handleChangeAge(newValue: any, actionMeta: any) {
    props.onFilterChange({ageValue: newValue})
  }

  function handleChangeService(newValue: any, actionMeta: any) {
    props.onFilterChange({serviceValue: newValue})
  }

  function handleChangeSpecialization(newValue: any, actionMeta: any) {
    props.onFilterChange({ageValue: newValue})
  }
  function handleChangeSupplierType(newValue: any, actionMeta: any) {
    props.onFilterChange({ageValue: newValue})
  }
  // console.log(props.filters.ageValue);
  return (
    <>
      {props.drawer && windowSize.width && windowSize.width < 768 && (
        <div className="filter-menu">
          <FilterMenu size={20}/>
          <Drawer
            className={props.filterClass}
            width="300px"
            placement="right"
            open={state}
            closeButtonStyle={{ position: 'absolute', top: 430 }}
            toggleHandler={openDrawer}
            closeButton={<FilterMenu className="open" size={20} />}>
            <div className="select-options">
              <Select value={props.filters.ageValue} options={options} onChange={handleChangeAge} />
              {/* <Select value={props.filters.serviceValue} options={options[1]} onChange={handleChangeService}/> */}
              {/*<Select value={specializationValue} options={options[2]} onChange={handleChangeSpecialization}/>
              <Select value={supplierTypeValue} options={options[3]} onChange={handleChangeSupplierType}/> */}
            </div>
          </Drawer>
        </div>
      )}
    </>
  );
};

export default Filter;
