// import React from 'react';
// import WeatherCard from './components/WeatherCard';
// // import './weather.css';

// function App() {
//   return (
//     <>
//     <div className="App">
//       <WeatherCard />
//     </div>
//     </>
//   );
// }

// export default App;

import React from 'react';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-blue-300 p-4">
      <WeatherCard />
    </div>
  );
}

export default App;
