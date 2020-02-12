import React from 'react';
import RcDrawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
interface Props {
  /** ClassName of the Drawer */
  className?: string;

  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton?: any;
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
const Drawer: React.FC<Props> = ({
  children,
  width,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  className,
}) => {
  return (
    <>
      <RcDrawer
        className={className}
        placement="right"
        width={width || '300px'}
        open={open}
        level={null}
        handler={false}
        maskStyle={{ backgroundColor: 'rgba(151, 133, 133, 0.6)', opacity: 1 }}>
        <div onClick={toggleHandler} style={closeButtonStyle}>
          {closeButton}
        </div>
        {children}
      </RcDrawer>
      <div style={{ height: 26 }} onClick={toggleHandler}>
        {drawerHandler}
      </div>
    </>
  );
};

export default Drawer;
