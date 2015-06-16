import React from 'react';
import _ from 'lodash';

import TemperatureGauge from './TemperatureGauge';
import fetchTemperature from '../fetchers/WeatherFetcher';
import ErrorBar from './ErrorBar';

import WeatherStore from '../stores/WeatherStore';
import WeatherActions from '../actions/WeatherActions';

export default class WeatherPage extends React.Component {
  constructor() {
    super();
    _.bindAll(this, 'onWeatherData');
  }
  componentWillMount() {
    this.setState(WeatherStore.getState());
  }

  componentDidMount() {
    // TODO: this is clearly the wrong way to load this.  Move to
    // data sources. Ideal spot is componentWillMount, but then the server will
    // try to call it.  componentDidMount is too late in the lifecycle
    WeatherStore.listen(this.onWeatherData);
    WeatherActions.requestTemperature(94110);
  }

  componentWillUnmount() {
    WeatherStore.unlisten(this.onWeatherData);
  }

  onWeatherData(data) {
    this.setState(data);
  }


  render() {
    if (this.state.error) {
      var gauge = <ErrorBar message={this.state.error} />;
    } else if (this.state.loading) {
      var gauge = (<div>Loading Temperature...</div>);
    } else {
      var gauge = <TemperatureGauge temp={this.state.temp} />;
    }
    return (
      <div>
        <h2>Weather</h2>
        { gauge }
      </div>
    );
  }
};
