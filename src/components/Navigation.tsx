/** @jsx jsx */
import React, { Fragment, useContext } from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Drawer from './Drawer/Drawer';
import { DrawerContext } from './Drawer/DrawerContext';
import { useWindowSize } from '../hooks/useWindowSize';
import Menu from '../assets/images/icon_menu_mobile.svg';

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
  drawer: boolean;
};

const Navigation: React.FC<Props> = props => {
  const nav = props.nav;
  // @ts-ignore
  const { state, dispatch } = useContext(DrawerContext);
  const openDrawer = () => {
    dispatch((current: boolean) => !current);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const windowSize = useWindowSize();

  return (
    <Fragment>
      {props.drawer && windowSize.width && windowSize.width < 768 ? (
        <div className="hamburger-menu">
          <img className="menu_icon" src={Menu} />
          <Drawer className={props.navClass} width="300px" placement="right" open={state} toggleHandler={openDrawer}>
            <nav>
              <ul className="navigation">
                {Object.values(nav)
                  .filter(item => item.navigation.nav)
                  .map((item, index) => (
                    <li key={`${item.navigation.url}-${index}`}>
                      <Link to={item.navigation.url} title={item.navigation.title}>
                        {item.navigation.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </Drawer>
        </div>
      ) : (
        <nav className={props.navClass}>
          <ul className="navigation">
            {Object.values(nav)
              .filter(item => item.navigation.nav)
              .map((item, index) => (
                <li key={`${item.navigation.url}-${index}`}>
                  <Link to={item.navigation.url} title={item.navigation.title}>
                    {item.navigation.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      )}
    </Fragment>
  );
};

export default Navigation;
