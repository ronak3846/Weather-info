// import React, { useState, useEffect } from 'react';
// import WeatherHeader from './WeatherHeader';
// import WeatherData from './WeatherData';
// import WeatherInfo from './WeatherInfo';

// function WeatherCard() {
//   const [city, setCity] = useState('Pune');
//   const [weather, setWeather] = useState({});

//   useEffect(() => {
//     getWeatherData();
//   }, [city]);

//   const getCountryName = (code) => {
//     return new Intl.DisplayNames([code], { type: 'region' }).of(code);
//   };

//   const getDateTime = (dt) => {
//     const curDate = new Date(dt * 1000);
//     const options = {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//     };
//     return new Intl.DateTimeFormat('en-US', options).format(curDate);
//   };

//   const getWeatherData = async () => {
//     const weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2f6b0402ccb214116e0bc810e4de2697`;
//     try {
//       const res = await fetch(weatherurl);
//       const data = await res.json();

//       const { main, name, weather, wind, sys, dt } = data;
//       const tempCelsius = main.temp - 273.15;
//       console.log(data);

//       setWeather({
//         name,
//         country: getCountryName(sys.country),
//         datetime: getDateTime(dt),
//         forecast: weather[0].main,
//         icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
//         temp: tempCelsius.toFixed(1),
//         min: (main.temp_min - 273.15).toFixed(1),
//         max: (main.temp_max - 273.15).toFixed(1),
//         feelsLike: (main.feels_like - 273.15).toFixed(1),
//         humidity: main.humidity,
//         wind: wind.speed,
//         pressure: main.pressure,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container">
//       <WeatherHeader onSearch={setCity} />
//       <WeatherData weather={weather} />
//       <WeatherInfo
//         feelsLike={weather.feelsLike}
//         humidity={weather.humidity}
//         wind={weather.wind}
//         pressure={weather.pressure}
//       />
//     </div>
//   );
// }

// export default WeatherCard;
import React, { useState, useEffect } from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherData from './WeatherData';
import WeatherInfo from './WeatherInfo';

function WeatherCard() {
  const [city, setCity] = useState('Pune');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getWeatherData();
  }, [city]);

  const getCountryName = (code) => {
    return new Intl.DisplayNames([code], { type: 'region' }).of(code);
  };

  const getDateTime = (dt) => {
    const curDate = new Date(dt * 1000);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(curDate);
  };

  const getWeatherData = async () => {
    const weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2f6b0402ccb214116e0bc810e4de2697`;
    try {
      const res = await fetch(weatherurl);
      const data = await res.json();

      const { main, name, weather, wind, sys, dt } = data;
      const tempCelsius = main.temp - 273.15;

      setWeather({
        name,
        country: getCountryName(sys.country),
        datetime: getDateTime(dt),
        forecast: weather[0].main,
        icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
        temp: tempCelsius.toFixed(1),
        min: (main.temp_min - 273.15).toFixed(1),
        max: (main.temp_max - 273.15).toFixed(1),
        feelsLike: (main.feels_like - 273.15).toFixed(1),
        humidity: main.humidity,
        wind: wind.speed,
        pressure: main.pressure,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-8">
      <WeatherHeader onSearch={setCity} />
      <WeatherData weather={weather} />
      <WeatherInfo
        feelsLike={weather.feelsLike}
        humidity={weather.humidity}
        wind={weather.wind}
        pressure={weather.pressure}
      />
    </div>
  );
}

export default WeatherCard;
