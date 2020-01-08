import React, { Component } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { graphql, StaticQuery } from 'gatsby';

type State = {
  lat: number;
  lng: number;
};

export default class SimpleExample extends Component<{}, State> {
  state = {
    lat: 45.947808,
    lng: 25.091419,
    zoom: 7,
    scrollWheelZoom: false,
    pane: 'markerPane',
  };

  render() {
    const position: LatLngTuple = [this.state.lat, this.state.lng];
    const query = graphql`
      query {
        hasura {
          providers {
            id
            coordinates
            name
          }
        }
      }
    `;

    return (
      <StaticQuery
        query={query}
        render={data => {
          const providers = data.hasura.providers;

          return (
            <Map center={position} zoom={this.state.zoom} scrollWheelZoom={this.state.scrollWheelZoom}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {Object.values(providers).map(item => (
                <Marker position={item.coordinates} key={1} />
              ))}
            </Map>
          );
        }}
      />
    );
  }
}
