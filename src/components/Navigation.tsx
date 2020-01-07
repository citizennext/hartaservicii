/** @jsx jsx */
import React, { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import Logo from '../assets/images/logo.svg'
import Menu from '../assets/images/icon_menu_mobile.svg'

type NavItem = {
  label: string
  url: string
  title: string
  nav: boolean
}

type Page = {
  navigation: NavItem
}

type Pages = {
  [key: string]: Page
}

type Props = {
  navClass?: string
  nav: Pages
}

const Navigation: React.FC<Props> = props => {
  const nav = props.nav
  return (
    <Fragment>
      <img className="menu_icon" src={Menu} />
      <Link to="/" style={{ height: 70 }}>
        <img src={Logo} alt="" />
      </Link>
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
    </Fragment>
  )
}

export default Navigation
