import React from 'react';
import Navigation from './Navigation';
import { DrawerProvider } from './Drawer/DrawerContext';
import Data from '../data/global.json';
import { Link } from 'gatsby';
import Logo from '../assets/images/logo.svg';
import Separator from './Separator';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Separator classSeparator="hidden md:block" color="snow" />
        <div className="interior">
          <Link to="/" title="Back to Homepage">
            <img src={Logo} alt="Logo" />
          </Link>
          <DrawerProvider>
            <Navigation navClass="nav-header" nav={Data.page} drawer={true} />
          </DrawerProvider>
        </div>
        <Separator classSeparator="md:hidden" color="burg" width="88vw" />
      </header>
    );
  }
}
