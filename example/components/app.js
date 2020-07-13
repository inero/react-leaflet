// @flow

import Leaflet from 'leaflet';
import React, { StrictMode } from 'react';

import AppSearch from './app-search';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

const App = () => (
  <StrictMode>
    <AppSearch/>
  </StrictMode>
)

export default App;
