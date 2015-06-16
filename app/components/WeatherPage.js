import React from 'react';

import TemperatureGauge from './TemperatureGauge';
import fetchTemperature from '../fetchers/WeatherFetcher';
import ErrorBar from './ErrorBar';

import WeatherStore from '../stores/WeatherStore';
import WeatherActions from '../actions/WeatherActions';

export default class WeatherPage extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null
    };
  }
  componentWillMount() {
    this.setState(WeatherStore.getState());
  }

  componentDidMount() {
    // TODO: this is clearly the wrong way to load this.  Move to
    // data sources.
    // Reasons:
    // - ideal spot is componentWillMount, but then the server will
    //   try to call it.  componentDidMount is too late in the lifecycle
    WeatherStore.listen(this.onWeatherData.bind(this));
    WeatherActions.requestTemperature(94110);
  }

  componentWillUnmount() {
    WeatherStore.unlisten(this.onWeatherData.bind(this));
  }

  onWeatherData(data) {
    this.setState(data);
  }


  render() {
    return (
      <div>
        <h2>Weather</h2>
        <ErrorBar message={this.state.error} />
        <TemperatureGauge temp={this.state.temp} />
      </div>
    );
  }
};
