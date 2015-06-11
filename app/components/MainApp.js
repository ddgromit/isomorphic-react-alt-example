import React from 'react';
import CounterPage from './CounterPage';
import {RouteHandler, Link} from 'react-router';

export default class MainApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Isomorphic App</h1>
        <Link to="home">Home</Link>
        <br />
        <Link to="counter">Counter</Link>
        <hr />
        <RouteHandler />
      </div>
    );
  }
};
