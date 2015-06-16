import WeatherActions from '../actions/WeatherActions';
import fetchTemperature from '../fetchers/WeatherFetcher';

export default {
  getTemperature: {
    remote(state, zip) {
      return fetchTemperature(zip);
    },

    success: WeatherActions.loadTemperature,
    error: WeatherActions.temperatureError,
    loading: WeatherActions.loadingTemperature,
  }
}