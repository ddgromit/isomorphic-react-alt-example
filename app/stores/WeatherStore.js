import alt from '../alt';
import WeatherActions from '../actions/WeatherActions';
import WeatherSource from '../sources/WeatherSource';

class WeatherStore {
  constructor() {
    this.bindAction(WeatherActions.loadTemperature, this.onLoadTemperature);
    this.bindAction(WeatherActions.temperatureError, this.onTemperatureError);
    this.bindAction(WeatherActions.loadingTemperature, this.onLoadingTemperature);
    this.temp = 0;
    this.loading = false;
    this.error = null;
    this.registerAsync(WeatherSource);
  }

  onLoadTemperature(temp) {
    this.temp = temp;
    this.loading = false;
    this.error = null;
  }

  onTemperatureError() {
    this.error = 'Temperature Error';
  }

  onLoadingTemperature() {
    this.loading = true;
  }
}

export default alt.createStore(WeatherStore);
