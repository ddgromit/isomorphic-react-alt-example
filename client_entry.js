// This code only runs in the browser. It's the webpack "entry point."
import React from 'react';
import Iso from 'iso';
import alt from './app/alt';
import routes from './app/routes';
import Router from 'react-router';

Iso.bootstrap(function onBootstrap(bootstrapData, _, container) {
  // Setup the client-side stores with the same data the server had
  alt.bootstrap(bootstrapData);

  Router.run(routes, Router.HistoryLocation, function onRoute(Handler) {
    React.render(<Handler />, container);
  });
});
