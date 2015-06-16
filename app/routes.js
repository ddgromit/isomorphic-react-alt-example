import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import MainApp from './components/MainApp';
import CounterPage from './components/CounterPage';
import HomePage from './components/HomePage';
import WeatherPage from './components/WeatherPage';

let routes = (
  <Route name="main" path="/" handler={MainApp}>
    <DefaultRoute handler={HomePage} name="home" />
    <Route name="counter" path="counter" handler={CounterPage} />
    <Route name="weather" path="weather" handler={WeatherPage} />
  </Route>
);

export default routes;
