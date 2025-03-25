// import React from 'react';

// function WeatherData({ weather }) {
//   const {
//     name,
//     country,
//     datetime,
//     forecast,
//     icon,
//     temp,
//     min,
//     max,
//     feelsLike,
//     humidity,
//     wind,
//     pressure,
//   } = weather;

//   return (
//     <div className="weather_body">
//       <h1 className="weather_city">{`${name}, ${country}`}</h1>
//       <p className="weather_time">{datetime}</p>
//       <div className="weather_data">
//         <p className="weather_forcast">{forecast}</p>
//         <div className="weather_icon">
//           <img src={icon} alt="weather icon" />
//         </div>
//       </div>
//       <p className="weather_temp">{temp}°C</p>
//       <div className="weather_minmax">
//         <p className="weather_min">Min: {min}°C</p>
//         <p className="weather_max">Max: {max}°C</p>
//       </div>
//     </div>
//   );
// }

// export default WeatherData;
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
  } = weather;

  return (
    <div className="text-center my-6">
      <h1 className="text-2xl font-bold text-gray-800">{`${name}, ${country}`}</h1>
      <p className="text-sm text-gray-500 mt-2">{datetime}</p>

      <div className="flex items-center justify-center mt-4 space-x-4">
        <p className="text-lg font-medium text-blue-600">{forecast}</p>
        {icon && (
          <div className="w-16 h-16">
            <img src={icon} alt="weather icon" className="w-full h-full object-contain" />
          </div>
        )}
      </div>

      <p className="text-5xl font-semibold text-gray-700 mt-4">{temp}°C</p>

      <div className="flex justify-center gap-6 mt-4 text-gray-600 text-sm">
        <p>Min: <span className="font-medium">{min}°C</span></p>
        <p>Max: <span className="font-medium">{max}°C</span></p>
      </div>
    </div>
  );
}

export default WeatherData;
