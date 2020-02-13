import React, { Component } from 'react';
import FilterResults from '../../Map/FilterPage/FilterResults';
import { DrawerProvider } from '../../Drawer/DrawerContext';

export default class Harta extends Component {
  render() {
    return (
    <DrawerProvider>
      <FilterResults />
    </DrawerProvider>);
  }
}
