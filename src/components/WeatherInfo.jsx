// import React from 'react';

// function WeatherInfo({ feelsLike, humidity, wind, pressure }) {
//   return (
//     <section className="weather_info">
//       <div className="weather_card">
//         <i className="fa-solid fa-droplet"></i>
//         <div>
//           <p>Feels like</p>
//           <p className="weather_feelslike">{feelsLike}°C</p>
//         </div>
//       </div>
//       <div className="weather_card">
//         <i className="fa-solid fa-cloud"></i>
//         <div>
//           <p>Humidity</p>
//           <p className="weather_humidity">{humidity}%</p>
//         </div>
//       </div>
//       <div className="weather_card">
//         <i className="fa-solid fa-wind"></i>
//         <div>
//           <p>Wind</p>
//           <p className="weather_wind">{wind} m/s</p>
//         </div>
//       </div>
//       <div className="weather_card">
//         <i className="fa-solid fa-bolt"></i>
//         <div>
//           <p>Pressure</p>
//           <p className="weather_pressure">{pressure} hPa</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WeatherInfo;
import React from 'react';
import { FaDroplet, FaCloud, FaWind, FaBolt } from 'react-icons/fa6';

function WeatherInfo({ feelsLike, humidity, wind, pressure }) {
  return (
    <section className="grid grid-cols-2 gap-4 mt-8">
      <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
        <FaDroplet className="text-blue-500 text-2xl" />
        <div>
          <p className="text-gray-600">Feels like</p>
          <p className="font-semibold text-gray-800">{feelsLike}°C</p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
        <FaCloud className="text-blue-400 text-2xl" />
        <div>
          <p className="text-gray-600">Humidity</p>
          <p className="font-semibold text-gray-800">{humidity}%</p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
        <FaWind className="text-green-500 text-2xl" />
        <div>
          <p className="text-gray-600">Wind</p>
          <p className="font-semibold text-gray-800">{wind} m/s</p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
        <FaBolt className="text-yellow-500 text-2xl" />
        <div>
          <p className="text-gray-600">Pressure</p>
          <p className="font-semibold text-gray-800">{pressure} hPa</p>
        </div>
      </div>
    </section>
  );
}

export default WeatherInfo;
