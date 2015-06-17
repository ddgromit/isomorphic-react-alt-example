import React from 'react';
import AltContainer from 'alt/AltContainer';

import WeatherStore from '../stores/WeatherStore';
import WeatherActions from '../actions/WeatherActions';

import WeatherPage from './WeatherPage';

export default class WeatherPageContainer extends React.Component {
  componentDidMount() {
    // When the page first loads in the browser, ask for weather data.  This
    // doesn't get called on the server.
    WeatherActions.requestTemperature(this.props.params.zip);
  }

  componentWillReceiveProps(nextProps) {
    // When the URL changes, ask for weather data for the new zip
    WeatherActions.requestTemperature(nextProps.params.zip);
  }

  render() {
    return (
      <AltContainer stores={ { weather: WeatherStore } }>
        <WeatherPage zip={this.props.params.zip} />
      </AltContainer>
    );
  }
}

WeatherPageContainer.propTypes = {
  params: React.PropTypes.object
};
