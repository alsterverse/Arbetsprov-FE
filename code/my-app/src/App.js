import React from 'react';

import Header from './components/Header';
import WeatherList from './components/WeatherList';

export const App = () => {
  return (
    <section>
      <Header />
      <WeatherList />
    </section>
  );
};
