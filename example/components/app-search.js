// @flow

import Leaflet from 'leaflet';
import React, { StrictMode } from 'react';

import SimpleExample from './simple';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

const AppSearch = () => (
  <StrictMode>
    <h1>React-Leaflet examples</h1>
    <h2>Popup with Marker</h2>
    <SimpleExample />
  </StrictMode>
)

export default AppSearch;
