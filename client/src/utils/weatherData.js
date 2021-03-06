import weatherApi from '../api/weather';

const weatherData = async ({ latitude, longitude }) => {
  try {
    const response = await weatherApi.get('', {
      params: {
        appid: process.env.REACT_APP_WEATHER_API_KEY,
        lat: latitude,
        lon: longitude,
        units: 'imperial'
      }
    });
    const { main, weather, wind} = await response.data;

    return {
      temp: main.temp,
      icon: weather[0].icon,
      type: weather[0].id,
      wind: wind.speed
    }
  } catch (err) {
    throw new Error('An error related to the weather data occurred', err);
  }
}

export default weatherData;