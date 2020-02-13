import React, { useContext /*useState*/ } from 'react';
import Select from 'react-select';
import Drawer from '../../Drawer/Drawer';
import { DrawerContext } from '../../Drawer/DrawerContext';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { FilterMenu } from '../../Icons';
// import providerData from '../../../data/providers-data.json';

// type OptionType = { [key: string]: any }
// type OptionsType = Array<OptionType>

type Props = {
  filterClass?: string;
  options: any;
  drawer: boolean;
  onFilterChange: any;
  // filters: any;
};

const Filter: React.FC<Props> = props => {
  const options = [
    { "value": null, "label": "Toate categoriile de servicii" },
    { "value": "1", "label": "Centru rezidenţial cu cazare pe perioadă nedeterminată" },
    { "value": "2", "label": "Centru rezidenţial cu cazare pe perioadă determinată" },
    { "value": "3", "label": "Locuinţă protejată" },
    { "value": "4", "label": "Centru de zi" },
    { "value": "5", "label": "Unitate de îngrijiri la domiciliu" },
    { "value": "6", "label": "Serviciu acordat în comunitate" }
];

  // @ts-ignore
  const { state, dispatch } = useContext(DrawerContext);
  const openDrawer = () => {
    dispatch((current: boolean) => !current);
  };
  const windowSize = useWindowSize();

  // function handleChangeAge(newValue: any) {
  //   props.onFilterChange({ ageValue: newValue });
  // }

  function handleChangeService(newValue: any) {
    props.onFilterChange({service: newValue.value})
  }

  /*function handleChangeSpecialization(newValue: any, actionMeta: any) {
    props.onFilterChange({ageValue: newValue})
  }*/
  /*function handleChangeSupplierType(newValue: any, actionMeta: any) {
    props.onFilterChange({ageValue: newValue})
  }*/
  // console.log(props.filters.ageValue);
  return (
    <>
      {props.drawer && windowSize.width && windowSize.width < 768 && (
        <div className="filter-menu">
          <FilterMenu size={20} />
          <Drawer
            className="map-drawer"
            width="300px"
            placement="right"
            open={state}
            closeButtonStyle={{}}
            toggleHandler={openDrawer}
            closeButton={<FilterMenu className="close" size={20} />}>
            <div className="select-options">
              {/* <Select options={options} onChange={handleChangeAge} /> */}
              <Select options={options} onChange={handleChangeService}/>
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
