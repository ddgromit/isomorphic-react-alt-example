import axios from 'axios';

export default function fetchTemperature(zip_code) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      zip: `${zip_code},us`,
      units: 'imperial'
    }
  }).then(function(response) {
    return response.data.main.temp;
  });
}
