import React from 'react';

import CurrentWeather from './components/CurrentWeather';

export const App = () => {
  return (
    <section>
      <h1>Weather app</h1>
      <h2>Hur är vädret i...</h2>
      <CurrentWeather />
    </section>
  );
};
