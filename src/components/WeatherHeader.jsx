// import React, { useState } from 'react';

// function WeatherHeader({ onSearch }) {
//   const [city, setCity] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(city);
//     setCity('');
//   };

//   return (
//     <div className="weather_header">
//       <form className="weather_search" onSubmit={handleSubmit}>
//         <i className="fa-solid fa-magnifying-glass"></i>
//         <input
//           type="text"
//           className="city_name"
//           placeholder="Search your city"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//       </form>
//     </div>
//   );
// }

// export default WeatherHeader;
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Optional: FontAwesome icon as React component

function WeatherHeader({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="mb-6">
      <form
        className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-sm"
        onSubmit={handleSubmit}
      >
        <FaSearch className="text-gray-500 text-lg" />
        <input
          type="text"
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
          placeholder="Search your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default WeatherHeader;
