import React, { useState, useEffect } from 'react';

// import { WEATHER_URL } from '../utils/urls';
import { APIkey } from '../utils/urls';
import SearchLocation from './SearchLocation';
import styled from 'styled-components';

const StyledWeatherCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
`;

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

  // const BackgroundSwitcher = (temperature) => {
  //   switch (temperature) {
  //     case temperature > 0:
  //       return 'yellow';
  //     case temperature > 19:
  //       return 'red';
  //     case temperature < 1:
  //       return 'blue';
  //     default:
  //       return '';
  //   }
  // };

  const onDeleteAll = () => {
    setLocations([]);
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
        <StyledWeatherCard key={location.location.name}>
          <p>{location.location.name}</p>
          <p>{location.current.temperature}°</p>
          <p>{location.current.weather_descriptions}</p>
          <img
            src={location.current.weather_icons}
            style={{ width: 50, height: 50 }}
            alt='icon'
          />
          <button
            onClick={(event) => {
              const updatedLocations = locations.filter(
                (item) => item.location.name !== location.location.name
              );
              setLocations([...updatedLocations]);
            }}
          >
            x
          </button>
        </StyledWeatherCard>
      ))}
      {locations.length > 1 && (
        <button onClick={onDeleteAll}>Remove all locations</button>
      )}
    </div>
  );
};

export default CurrentWeather;
