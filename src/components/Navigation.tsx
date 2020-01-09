/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';
import RcDrawer from 'rc-drawer';

type NavItem = {
  label: string;
  url: string;
  title: string;
  nav: boolean;
};

type Page = {
  navigation: NavItem;
};

type Pages = {
  [key: string]: Page;
};

type Props = {
  navClass?: string;
  nav: Pages;
};

const Navigation: React.FC<Props> = props => {
  const nav = props.nav;
  return (
    <RcDrawer>
      <nav className={props.navClass}>
        <ul>
          {Object.values(nav)
            .filter(item => item.navigation.nav)
            .map(item => (
              <li key={item.navigation.label}>
                <Link to={item.navigation.url} title={item.navigation.title}>
                  {item.navigation.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </RcDrawer>
  );
};

export default Navigation;
