// This code only runs in the browser. It's the webpack "entry point."
import MainApp from './app/components/MainApp';
import React from 'react';
import Iso from 'iso';
import alt from './app/alt';
import routes from './app/routes';
import Router from 'react-router';

Iso.bootstrap(function(bootstrapData, _, container) {
  // Setup the client-side stores with the same data the server had
  alt.bootstrap(bootstrapData);

  Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, container);
  });
});
