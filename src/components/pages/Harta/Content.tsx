import React, { Component } from 'react';
import Providers from '../../Map/index';
import { DrawerProvider } from '../../Drawer/DrawerContext';

export default class Harta extends Component {
  render() {
    return (
    <DrawerProvider>
      <Providers />
    </DrawerProvider>);
  }
}
