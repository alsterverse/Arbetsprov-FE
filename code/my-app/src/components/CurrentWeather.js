import React, { useState, useEffect } from 'react';

// import { WEATHER_URL } from '../utils/urls';
import { APIkey } from '../utils/urls';
import SearchLocation from './SearchLocation';

const CurrentWeather = () => {
  //   const [location, setLocation] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  //   useEffect(() => {

  //   });

  //

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'GET',
    };
    fetch(
      `http://api.weatherstack.com/current?access_key=${APIkey}&query=${searchValue}`,
      options
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    console.log(searchValue);
  };

  return (
    <div>
      <SearchLocation
        onFormSubmit={onFormSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div> Here goes the weather cards</div>
    </div>
  );
};

export default CurrentWeather;
