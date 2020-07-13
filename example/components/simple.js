// @flow

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from '../../src'

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export default class SimpleExample extends Component<{}, State> {
  state = {
    lat: 0,
    lng: 0,
    zoom: 13,
    zip: ''
  }

  input_onChange = (e) => {
    console.log(e.target.value);
    this.setState({zip: e.target.value, lat: 51.505, lng: -0.09});
  }

  input_onKeyDown = (e) => {
    console.log(e.target.value);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div align="center">
        <input type="number" value={this.state.zip} onChange={this.input_onChange} onKeyDown={this.input_onKeyDown}></input>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}
