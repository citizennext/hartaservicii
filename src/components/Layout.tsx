import React from 'react';

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
    <main className={`flex flex-wrap ${contentColumns()}`}>
      {typeof left !== 'boolean' && left && <div className="sidebar-left order-2 w-full md:order-none">{left}</div>}
      <div className="main">{children}</div>
      {typeof right !== 'boolean' && right && <div className="sidebar-right order-3 w-full md:order-none">{right}</div>}
    </main>
  );
};

export default Layout;
