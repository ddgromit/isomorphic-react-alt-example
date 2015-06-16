import alt from '../alt';
import WeatherActions from '../actions/WeatherActions';

class WeatherStore {
  constructor() {
    this.bindAction(WeatherActions.loadTemperature, this.onLoadTemperature);
    this.temp = 0;
  }

  onLoadTemperature(temp) {
    console.log('loaded');
    this.temp = temp;
  }
}

export default alt.createStore(WeatherStore);
