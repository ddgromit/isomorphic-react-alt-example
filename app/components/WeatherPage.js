import React from 'react';

import TemperatureGauge from './TemperatureGauge';
import ErrorBar from './ErrorBar';

export default class WeatherPage extends React.Component {
  render() {
    let gauge;
    if (this.props.weather.error) {
      gauge = <ErrorBar message={this.props.weather.error} />;
    } else if (this.props.weather.loading) {
      gauge = (<div>Loading Temperature...</div>);
    } else {
      gauge = <TemperatureGauge temp={this.props.weather.temp} />;
    }
    return (
      <div>
        <h2>Weather ({this.props.zip})</h2>
        { gauge }
      </div>
    );
  }
}

WeatherPage.propTypes = {
  weather: React.PropTypes.object,
  zip: React.PropTypes.string
};
