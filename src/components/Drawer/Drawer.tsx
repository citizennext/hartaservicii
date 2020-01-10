import React from 'react';
import RcDrawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import styled from '@emotion/styled';
interface Props {
  /** ClassName of the Drawer */
  className?: string;

  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton?: JSX.Element;
  closeButtonStyle?: any;

  /** Set drawer width. Default value is 300px. */
  width?: string;
  /** Set drawer position left || right || top || bottom. */
  placement?: 'left' | 'right' | 'top' | 'bottom';

  /** drawerHandler could be button, icon, string or any component */
  drawerHandler?: JSX.Element;
  toggleHandler?: () => void;
  open?: boolean;
}
const Drawer: React.FC<Props> = ({ children, width, closeButton, closeButtonStyle, drawerHandler, toggleHandler, open }) => {
  return (
    <>
      <RcDrawer
        placement="right"
        width={width || '300px'}
        open={open}
        level={null}
        handler={false}
        maskStyle={{ background: 'rgba(151, 133, 133, 0.6)' }}>
        <DrawerClose onClick={toggleHandler} style={closeButtonStyle}>
          {closeButton}
        </DrawerClose>
        {children}
      </RcDrawer>
      <div style={{ height: 26 }} onClick={toggleHandler}>
        {drawerHandler}
      </div>
    </>
  );
};
const DrawerClose = styled.div`
  position: absolute;
  top: 50px;
  right: 30px;
`;
export default Drawer;
