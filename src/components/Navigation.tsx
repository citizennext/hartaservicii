/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'

type Props = {
  item?: object
  navClass?: string
  nav?: object
}

const Navigation: React.FC<Props> = props => {
  const nav = props.nav
  return (
    <nav className={props.navClass}>
      <ul>
        {Object.values(nav)
          .filter(item => item.nav.nav === true)
          .map(item => (
            <li key={item.nav.label}>
              <Link to={item.nav.url} title={item.nav.title}>
                {item.nav.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Navigation
