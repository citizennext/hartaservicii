/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Navigation from './Navigation'
import Data from '../data/global.json'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Navigation navClass="nav-header" nav={Data.page} />
      </header>
    )
  }
}
