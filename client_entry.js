// This code only runs in the browser. It's the webpack "entry point."
import MainApp from './app/components/MainApp';
import React from 'react';
import Iso from 'iso';

Iso.bootstrap(function(state, _, container) {
  React.render(<MainApp initialCount={state.count} />, container);
});
