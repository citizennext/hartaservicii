import React, { Component } from 'react';
import { LatLngTuple } from 'leaflet';
import { Map, Marker, TileLayer, Tooltip } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { graphql, StaticQuery } from 'gatsby';
import PopUps from './PopUps';

type State = {
  lat: number;
  lng: number;
  zoom: number;
  scrollWheelZoom: boolean;
  pane: string;
  selectedItem?: Provider;
  active: boolean;
};

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

export default class Providers extends Component<{}, State> {
  state = {
    lat: 45.947808,
    lng: 25.091419,
    zoom: 7,
    scrollWheelZoom: false,
    pane: 'markerPane',
    selectedItem: undefined,
    active: true,
  };

  handleClick = (item: Provider) => {
    return () => {
      this.setState({ selectedItem: item, active: true });
    };
  };

  handleClose = () => {
    this.setState({ active: false });
  };

  render() {
    const position: LatLngTuple = [this.state.lat, this.state.lng];
    const query = graphql`
      query {
        hasura {
          providers {
            id
            coordinates
            address
            name
            location
            capacity
            district
            email
            license_by
            license_date_5years
            license_date_provisional
            license_no
          }
        }
      }
    `;

    return (
      <StaticQuery
        query={query}
        render={data => {
          const providers = data.hasura.providers as Provider[];
          return (
            <div>
              {this.state.selectedItem && this.state.active && (
                <PopUps item={this.state.selectedItem} onClose={this.handleClose} />
              )}
              <Map
                center={position}
                zoom={this.state.zoom}
                maxZoom={20}
                scrollWheelZoom={this.state.scrollWheelZoom}
                className="markercluster-map">
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup showCoverageOnHover={false}>
                  {Object.values(providers).map((item, index) => (
                    <Marker position={item.coordinates} key={`marker-${item.id}-${index}`} onClick={this.handleClick(item)}>
                      <Tooltip>{item.name}</Tooltip>
                    </Marker>
                  ))}
                </MarkerClusterGroup>
              </Map>
            </div>
          );
        }}
      />
    );
  }
}
