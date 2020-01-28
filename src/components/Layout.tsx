import React from 'react';
import '../assets/theme/src/style.sass';

type Props = {
  left?: React.ReactNode | boolean;
  right?: React.ReactNode | boolean;
};

const Layout: React.FC<Props> = ({ left, right, children }) => {
  const contentColumns = () => {
    let sidebarLeftBoolean = '',
      sidebarRightBoolean = '';

    if (typeof left === 'boolean') sidebarLeftBoolean = ' sidebar-left-push';
    if (typeof right === 'boolean') sidebarRightBoolean = ' sidebar-right-push';

    if (left && right) {
      return 'three-columns' + sidebarLeftBoolean + sidebarRightBoolean;
    } else if (left && !right) {
      return 'two-columns-left' + sidebarLeftBoolean;
    } else if (!left && right) {
      return 'two-columns-right' + sidebarRightBoolean;
    } else {
      return 'one-column';
    }
  };

  return (
    <main className={contentColumns()}>
      {typeof left !== 'boolean' && left && <div className="sidebar-left">{left}</div>}
      <div className="main">{children}</div>
      {typeof right !== 'boolean' && right && <div className="sidebar-right">{right}</div>}
    </main>
  );
};

export default Layout;
