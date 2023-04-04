const axios = require('axios');
const city_id = 643492
const private_key = "e935e6cd3bab4b178edabc6ffaf747c3"


async function getCurrentWeather(callback) {
    const url = `https://api.weatherbit.io/v2.0/current?city_id=${city_id}&key=${private_key}`;
    axios.get(url)
    .then(response => {
      callback(null, response.data.data[0]); // Pass the current weather information to the callback
    })
    .catch(error => {
      callback(error); // Pass any errors to the callback
    });
  }
  
  module.exports ={getCurrentWeather}