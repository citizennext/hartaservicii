/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
// @todo st3phan - it must import on common and fixed validation
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Data from '../../../data/global';

export default class SidebarLeft extends React.Component {
  render() {
    return <div>{Data.page.test.sidebarLeft}</div>;
  }
}
