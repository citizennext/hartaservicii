import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Providers from './providers.json'

type State = {
  lat: number
  lng: number
}

export default class SimpleExample extends Component<{}, State> {
  state = {
    lat: 45.947808,
    lng: 25.091419,
    zoom: 7,
    scrollWheelZoom: false,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} scrollWheelZoom={this.state.scrollWheelZoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Object.values(Providers).map(item => (
          <Marker position={[item.lat, item.lng]} key={1}>
            <Popup>{[item.popup]}</Popup>
          </Marker>
        ))}
      </Map>
    )
  }
}
