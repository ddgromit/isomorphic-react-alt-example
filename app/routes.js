import React from 'react';
import Router from 'react-router';
import MainApp from './components/MainApp';
import CounterPage from './components/CounterPage';

let Route = Router.Route;

let routes = (
  <Route name='main' path='/' handler={MainApp}>
    <Route name='counter' path='counter' handler={CounterPage} />
  </Route>
);

export default routes;
