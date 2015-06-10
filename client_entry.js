// This code only runs in the browser. It's the webpack "entry point."
import MainApp from './app/components/MainApp';
import React from 'react';
import Iso from 'iso';
import alt from './app/alt';

Iso.bootstrap(function(bootstrapData, _, container) {
  // Setup the client-side stores with the same data the server had
  alt.bootstrap(bootstrapData);

  React.render(<MainApp />, container);
});
