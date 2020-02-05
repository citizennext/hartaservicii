import React, { useContext } from 'react';
import Select from 'react-select';
import Drawer from './Drawer/Drawer';
import { DrawerContext } from './Drawer/DrawerContext';
import { useWindowSize } from '../hooks/useWindowSize';
import { FilterMenu } from './Icons';

// type Option = {
//   value: string;
//   label: string;
// }

// type FilterType = {
//   [key: string]: Array<Option>;
// };

type Props = {
  filterClass?: string;
  options: object;
  drawer: boolean;
};

const Filter: React.FC<Props> = props => {
  const options = props.options;
  console.log(options)
  // @ts-ignore
  const { state, dispatch } = useContext(DrawerContext);
  const openDrawer = () => {
    dispatch((current: boolean) => !current);
  };
  const windowSize = useWindowSize();

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
            closeButtonStyle={{ position: 'absolute', top: 130 }}
            toggleHandler={openDrawer}
            closeButton={<FilterMenu className="open" size={20} />}>
            <div className="select-options">
              {Object.values(options).map((selectOptions) => {
                // console.log(selectOptions)
                return <Select options={selectOptions} />
              })} 
            </div>
          </Drawer>
        </div>
      )}
    </>
  );
};

export default Filter;
