import React, { Component } from 'react';
import { LatLngTuple } from 'leaflet';

type Provider = {
  id: string;
  coordinates: LatLngTuple;
  address: string;
  name: string;
  location: string;
  capacity: number;
  district: string;
  email: string;
  license_by: string;
  license_date_5years: string;
  license_date_provisional: string;
  license_no: string;
};

type Props = {
  item?: Provider;
  onClose: () => void;
};

type State = {
  active: boolean;
};

export default class Providers extends Component<Props, State> {
  render() {
    const item = this.props.item;
    if (!item) return null;
    return (
      <div className="map-marker-popup" id="map-marker-popup" data-id={item.id}>
        <header>
          <div className="popup-logo">[Popup Logo]</div>
          <div className="close-map-marker-popup" onClick={this.props.onClose}>
            [ X ]
          </div>
        </header>
        <main>
          <h3>{item.name}</h3>
          <section>[Asociatia]</section>
          <section>[Nr. identificare, Evaluare utilizatori]</section>
          <section>[Capacitate, Directii, Distributie]</section>
          <section>[Address]</section>
          <section>[Servicii]</section>
          <section>[Furnizor]</section>
        </main>
        <footer>
          <section>[Ce nevoie are centrul, cum poti sa ajuti?]</section>
          <section>[Donatii/Voluntariat]</section>
          <section>[Actualizare informatii]</section>
          <section>[Evaluare centru]</section>
        </footer>
      </div>
    );
  }
}
