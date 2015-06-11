import React from 'react';
import TemperatureGauge from './TemperatureGauge';
import fetchTemperature from '../fetchers/WeatherFetcher';
import ErrorBar from './ErrorBar';

export default class WeatherPage extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: 96,
      error: null
    }
  }

  componentDidMount() {
    fetchTemperature(94110).then((temp) => {
      this.setState({
        temp: temp,
        error: null
      });
    }).catch(() => {
      console.log('Error fetching weather');
      this.setState({
        error: 'Error fetching weather'
      });
    });
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
