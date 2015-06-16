import axios from 'axios';

export default function fetchTemperature(zipCode) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      zip: `${zipCode},us`,
      units: 'imperial'
    }
  }).then(function tempResponse(response) {
    return response.data.main.temp;
  });
}
