/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
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
        <Separator color="snow" />
        <div className="interior">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <DrawerProvider>
            <Navigation navClass="nav-header" nav={Data.page} drawer={true} />
          </DrawerProvider>
        </div>
      </header>
    );
  }
}
