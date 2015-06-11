import React from 'react';
import CounterPage from './CounterPage';
import Router from 'react-router';

export default class MainApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Isomorphic App</h1>
        <hr />
        <Router.RouteHandler />
      </div>
    );
  }
};
