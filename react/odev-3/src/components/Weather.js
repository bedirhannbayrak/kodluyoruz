import { useWeather } from '../context/WeatherContext';
import Day from './Day';

const days = {
  0: 'Pzt',
  1: 'Salı',
  2: 'Çrş',
  3: 'Prş',
  4: 'Cuma',
  5: 'Cmt',
  6: 'Pzr',
};

const today = new Date().getDay();

const Weather = () => {
  const { weather } = useWeather();
  return (
    <div className="weather">
      {weather &&
        Array.isArray(weather.list) &&
        weather.list.map((item, key) => {
          return (
            <Day
              key={key}
              day={days[(today + key - 1) % 7]}
              max={item.temp.max}
              min={item.temp.min}
              img={item.weather[0].icon}
            />
          );
        })}
    </div>
  );
};

export default Weather;
