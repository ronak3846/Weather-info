import React from 'react';

function WeatherInfo({ feelsLike, humidity, wind, pressure }) {
  return (
    <section className="weather_info">
      <div className="weather_card">
        <i className="fa-solid fa-droplet"></i>
        <div>
          <p>Feels like</p>
          <p className="weather_feelslike">{feelsLike}°C</p>
        </div>
      </div>
      <div className="weather_card">
        <i className="fa-solid fa-cloud"></i>
        <div>
          <p>Humidity</p>
          <p className="weather_humidity">{humidity}%</p>
        </div>
      </div>
      <div className="weather_card">
        <i className="fa-solid fa-wind"></i>
        <div>
          <p>Wind</p>
          <p className="weather_wind">{wind} m/s</p>
        </div>
      </div>
      <div className="weather_card">
        <i className="fa-solid fa-bolt"></i>
        <div>
          <p>Pressure</p>
          <p className="weather_pressure">{pressure} hPa</p>
        </div>
      </div>
    </section>
  );
}

export default WeatherInfo;
