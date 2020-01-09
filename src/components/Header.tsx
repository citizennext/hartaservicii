/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Navigation from './Navigation';
import Data from '../data/global.json';
import Menu from '../assets/images/icon_menu_mobile.svg';
import { Link } from 'gatsby';
import Logo from '../assets/images/logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="menu_icon" src={Menu} />
        <Link to="/" style={{ height: 70 }}>
          <img src={Logo} alt="" />
        </Link>
        <Navigation navClass="nav-header" nav={Data.page} />
      </header>
    );
  }
}
