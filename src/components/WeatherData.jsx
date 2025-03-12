import React from 'react';

function WeatherData({ weather }) {
  const {
    name,
    country,
    datetime,
    forecast,
    icon,
    temp,
    min,
    max,
    feelsLike,
    humidity,
    wind,
    pressure,
  } = weather;

  return (
    <div className="weather_body">
      <h1 className="weather_city">{`${name}, ${country}`}</h1>
      <p className="weather_time">{datetime}</p>
      <div className="weather_data">
        <p className="weather_forcast">{forecast}</p>
        <div className="weather_icon">
          <img src={icon} alt="weather icon" />
        </div>
      </div>
      <p className="weather_temp">{temp}°C</p>
      <div className="weather_minmax">
        <p className="weather_min">Min: {min}°C</p>
        <p className="weather_max">Max: {max}°C</p>
      </div>
    </div>
  );
}

export default WeatherData;
