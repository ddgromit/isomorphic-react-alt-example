import alt from '../alt';
import fetchTemperature from '../fetchers/WeatherFetcher';

class WeatherActions {
  constructor() {
    this.generateActions('loadTemperature');
  }

  requestTemperature(zip) {
    console.log('requesting temperature');
    fetchTemperature(zip).then((temp) => {
      this.actions.loadTemperature(temp);
    }).catch(console.log.bind(this));
  }
}

export default alt.createActions(WeatherActions);
