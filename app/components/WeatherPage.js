import React from 'react';
import _ from 'lodash';

import TemperatureGauge from './TemperatureGauge';
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
    WeatherStore.listen(this.onWeatherData);

    // On the clientside, make a request for data when the page loads
    WeatherActions.requestTemperature(this.props.params.zip);
  }
  componentWillReceiveProps(nextProps) {
    // When the URL changes, ask for weather data for the new zip
    WeatherActions.requestTemperature(nextProps.params.zip);
  }

  componentWillUnmount() {
    WeatherStore.unlisten(this.onWeatherData);
  }

  onWeatherData(data) {
    this.setState(data);
  }


  render() {
    let gauge;
    if (this.state.error) {
      gauge = <ErrorBar message={this.state.error} />;
    } else if (this.state.loading) {
      gauge = (<div>Loading Temperature...</div>);
    } else {
      gauge = <TemperatureGauge temp={this.state.temp} />;
    }
    return (
      <div>
        <h2>Weather ({this.props.params.zip})</h2>
        { gauge }
      </div>
    );
  }
}

WeatherPage.propTypes = {
  params: React.PropTypes.object
};
