import React, { useState } from 'react';

function WeatherHeader({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };

  return (
    <div className="weather_header">
      <form className="weather_search" onSubmit={handleSubmit}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="city_name"
          placeholder="Search your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>
    </div>
  );
}

export default WeatherHeader;
