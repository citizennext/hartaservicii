import React from 'react';
import '../assets/theme/src/style.sass';

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ left, right, children }) => {
  const contentColumns = () => {
    if (left && right) {
      return 'three-columns';
    } else if (left && !right) {
      return 'two-columns-left';
    } else if (!left && right) {
      return 'two-columns-right';
    } else {
      return 'one-column';
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
