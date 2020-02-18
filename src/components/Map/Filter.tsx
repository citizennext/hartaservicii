import React, { useContext } from 'react';
import Select from 'react-select';
import Drawer from '../Drawer/Drawer';
import { DrawerContext } from '../Drawer/DrawerContext';
import { useWindowSize } from '../../hooks/useWindowSize';
import { FilterMenu } from '../Icons';
import options from '../../data/filter-options.json';

/**
 * @todo Cristina, Seco, Stefan -  de adaugat filters state in select value
 * filters: any;
*/
type Props = {
  filterClass?: string;
  options: any;
  drawer: boolean;
  onFilterChange: any;
};

type State = {
  open: string;
}

const Filter: React.FC<Props> = props => {
  // const [open, setOpen] = useState("");
  // @ts-ignore
  const { state, dispatch } = useContext(DrawerContext);
  const openDrawer = () => {
    dispatch((current: boolean) => !current);
  };
  const windowSize = useWindowSize();
/*
 * @todo Cristina, Seco, Stefan -  de adaugat filters state in select value
 * const filters = props.filter
*/

  function handleChangeAge(newValue: any) {
    props.onFilterChange({ category: newValue.value ? `%${newValue.value}%` : newValue.value });
  }

  function handleChangeService(newValue: any) {
    if (newValue.value) {
      props.onFilterChange({service: parseInt(newValue.value)})
    }
    else{
      props.onFilterChange({service: newValue.value });
    }
  }

  function handleChangeSpecialization(newValue: any) {
    if (newValue.value) {
      props.onFilterChange({specialization: `%${newValue.value}%`})
    }
    else {
      props.onFilterChange({category: newValue.value });
    }
  }

  function handleChangeSupplierType(newValue: any) {
    props.onFilterChange({supplierPrivate: newValue.value})
  }

  return (
    <>
      {props.drawer && windowSize.width && windowSize.width < 768 ? (
        <div className="filter-menu" data-open={state}>
          <FilterMenu size={20} />
          <Drawer
            className="map-drawer map-filters"
            width="300px"
            placement="right"
            open={state}
            closeButtonStyle={{}}
            toggleHandler={openDrawer}
            closeButton={<FilterMenu className="close" size={20} />}>
            <div className="select-options">
              <div className="pin-number">960</div>
              <Select options={options.age} onChange={handleChangeAge} />
              <Select options={options.service_type} onChange={handleChangeService}/>
              <Select options={options.specializari} onChange={handleChangeSpecialization}/>
              <Select options={options.accesibilitate} onChange={handleChangeSupplierType}/>
            </div>
          </Drawer>
        </div>
      ) : (
        <div className="select-options">
          <div className="select-container">
            <label>Beneficiari</label>
            <Select options={options.age} onChange={handleChangeAge} />
          </div>
          <div className="select-container">
            <label>Tip servicii sociale</label>
            <Select options={options.service_type} onChange={handleChangeService}/>
          </div>
          <div className="select-container">
            <label>Tip specializare</label>
            <Select options={options.specializari} onChange={handleChangeSpecialization}/>
          </div>
          <div className="select-container">
            <label>Administrator</label>
            <Select options={options.accesibilitate} onChange={handleChangeSupplierType}/>
          </div>
          <div className="pin-number select-container">
            <label>Total centre</label>960
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
