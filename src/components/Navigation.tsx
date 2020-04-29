import React, { useState } from 'react';
import { Link } from 'gatsby';
import Drawer from './Drawer/Drawer';

import { useWindowSize } from '../hooks/useWindowSize';
import { Close, Menu } from './Icons';
const isActive = ({ isCurrent }: { isCurrent: boolean }) => {
  return isCurrent ? { className: 'active' } : {};
};
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

const Navigation: React.FC<Props> = (props) => {
  const nav = props.nav;

  const [isOpen, setIsOpen] = useState(false);
  const openDrawer = () => {
    setIsOpen((current: boolean) => !current);
  };
  const windowSize = useWindowSize();

  return (
    <>
      {props.drawer && windowSize.width && windowSize.width < 768 ? (
        <div className="hamburger-menu">
          <Menu className="menu_icon text-brown" />
          <Drawer
            className={props.navClass}
            width="300px"
            placement="right"
            open={isOpen}
            closeButtonStyle={{ position: 'absolute', top: 50, right: 30 }}
            toggleHandler={openDrawer}
            closeButton={<Close size={22} style={{ color: 'white' }} />}>
            <nav className={props.navClass}>
              <ul className="navigation">
                {Object.values(nav)
                  .filter((item) => item.navigation.nav)
                  .map((item, index) => (
                    <li key={`${item.navigation.url}-${index}`}>
                      <Link to={item.navigation.url} title={item.navigation.title} getProps={isActive}>
                        {item.navigation.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
            <a
              href="https://www.facebook.com/hartaserviciilorsociale"
              title="Facebook Page"
              target="_blank"
              rel="noreferrer noopener">
              <button className="social-nav"></button>
            </a>
          </Drawer>
        </div>
      ) : (
        <nav className={props.navClass}>
          <ul className="navigation">
            {Object.values(nav)
              .filter((item) => item.navigation.nav)
              .map((item, index) => (
                <li key={`${item.navigation.url}-${index}`}>
                  <Link to={item.navigation.url} title={item.navigation.title} getProps={isActive}>
                    {item.navigation.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
