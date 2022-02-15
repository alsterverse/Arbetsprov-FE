import React from 'react';

import WeatherList from './components/WeatherList';

export const App = () => {
  return (
    <section>
      <h1>Weather app</h1>
      <h2>Hur är vädret i...</h2>
      <WeatherList />
    </section>
  );
};
