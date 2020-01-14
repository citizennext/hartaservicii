import React from 'react';
import '../assets/theme/src/style.sass';

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ left, right, children }) => {
  const contentColumns = () => {
    if (left && right) {
      return '3columns';
    } else if (left && !right) {
      return '2colums-left';
    } else if (!left && right) {
      return '2colums-right';
    } else {
      return '1column';
    }
  };

  return (
    <main className={contentColumns()}>
      {left && <div className="sidebar-left">{left}</div>}
      <div className="main">{children}</div>
      {right && <div className="sidebar-right">{right}</div>}
    </main>
  );
};

export default Layout;
