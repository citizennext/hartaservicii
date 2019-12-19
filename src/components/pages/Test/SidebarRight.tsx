/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
// @todo st3phan - it must import on common and fixed validation
// @ts-ignore
import Data from '../../../data/global'

export default class SidebarRight extends React.Component {
  render() {
    return <div>{Data.pages.test.sidebarRight}</div>
  }
}
