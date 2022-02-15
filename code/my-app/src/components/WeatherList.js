import React, { useState, useEffect } from 'react';

// import { WEATHER_URL } from '../utils/urls';
import { APIkey } from '../utils/urls';
import SearchLocation from './SearchLocation';

const CurrentWeather = () => {
  const [locations, setLocations] = useState([]);
  const [searchValue, setSearchValue] = useState('');

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
      .then((data) => setLocations([data, ...locations]));

    //   if (locations.length === 0) {
    //     setLocations(data.location);
    //   } else {
    //   }
    // });

    console.log(locations.length);
    console.log(locations);
    setSearchValue('');
  };

  return (
    <div>
      <SearchLocation
        onFormSubmit={onFormSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div> Here goes the weather cards</div>
      {locations.map((location) => (
        <div key={location.location.name}>
          <p>{location.location.name}</p>
          <p>{location.current.temperature}</p>
        </div>
      ))}
    </div>
  );
};

export default CurrentWeather;
