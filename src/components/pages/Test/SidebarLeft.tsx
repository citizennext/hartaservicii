import React from 'react';
// @todo st3phan - it must import on common and fixed validation
import Data from '../../../data/global.json';

export default class SidebarLeft extends React.Component {
  render() {
    return <div>{Data.page.test.sidebarLeft}</div>;
  }
}
