import React, { Component } from 'react';
import { LatLngTuple } from 'leaflet';
import { Map, Marker, Tooltip, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { graphql, StaticQuery } from 'gatsby';

type State = {
  lat: number;
  lng: number;
};

type Provider = {
  id: string;
  coordinates: LatLngTuple;
  name: string;
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
          const providers = data.hasura.providers as Provider[];

          return (
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
                  <Marker position={item.coordinates} key={`marker-${item.id}-${index}`}>
                    <Tooltip>{item.name}</Tooltip>
                  </Marker>
                ))}
              </MarkerClusterGroup>
            </Map>
          );
        }}
      />
    );
  }
}
