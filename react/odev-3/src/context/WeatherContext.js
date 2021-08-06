import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const WeatherContext = createContext();
const API_KEY = process.env.REACT_APP_X_RAPID_API_KEY;
const API_HOST = process.env.REACT_APP_X_RAPID_API_HOST;

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('istanbul');

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
      params: {
        q: `${city},tr`,
        cnt: '7',
        units: 'metric',
      },
      headers: {
        'x-rapidapi-key': 'd375da5ec7msh4d7270f7b5ab70bp1bc2b2jsn436391db5dff',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setWeather(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [city]);

  const value = { weather, setCity };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);

export default WeatherProvider;
