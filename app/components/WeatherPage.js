import React from 'react';
import TemperatureGauge from './TemperatureGauge';

export default class WeatherPage extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: 96
    }
  }

  render() {
    return (
      <div>
        <h2>Weather</h2>
        <TemperatureGauge temp={this.state.temp} />
      </div>
    );
  }
};
