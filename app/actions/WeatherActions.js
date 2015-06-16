import alt from '../alt';
import WeatherStore from '../stores/WeatherStore';

class WeatherActions {
  constructor() {
    this.generateActions(
      'loadTemperature',
      'temperatureError',
      'loadingTemperature'
    );
  }

  requestTemperature(zip) {
    WeatherStore.getTemperature(zip);
  }
}

export default alt.createActions(WeatherActions);
