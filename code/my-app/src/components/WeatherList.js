import React, { useState } from 'react';

import { APIkey } from '../utils/constants';
import SearchLocation from './SearchLocation';
import styled from 'styled-components';

const StyledWeatherCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  &.mid-temperature {
    background-color: yellow;
  }
  &.high-temperature {
    background-color: red;
  }
  &.low-temperature {
    background-color: blue;
  }
  /* background-color: ${(props) => props.BackgroundSwitcher || 'white'}; */
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
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&APPID=${APIkey}`,
      options
    )
      .then((res) => res.json())
      .then((data) => setLocations([data, ...locations]))
      .catch((error) => alert('no city found'));

    console.log(locations.length);
    console.log(locations);
    setSearchValue('');
  };

  // const tempStyling =
  //   (locationTemperature > 1 &&
  //     locationTemperature < 19 === 'mid-temperature') ||
  //   locationTemperature > 19 === 'high-temperature' ||
  //   locationTemperature < 1 === 'low-temperature';

  const BackgroundSwitcher = () => {
    let locationTemperature = locations.map((location) => location.main.temp);

    if (locationTemperature > 1 && locationTemperature < 19) {
      return 'mid-temperature';
    } else if (locationTemperature > 19) {
      return 'high-temperature';
    } else if (locationTemperature < 1) {
      return 'low-temperature';
    } else {
      return 'default';
    }
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
        <StyledWeatherCard key={location.id} className={BackgroundSwitcher()}>
          <p>{location.name}</p>
          <p>{location.main.temp}°</p>
          <p>{location.weather.description}</p>
          {/* <img
            src={location.current.weather_icons}
            style={{ width: 50, height: 50 }}
            alt='icon'
          /> */}
          <button
            onClick={(event) => {
              const updatedLocations = locations.filter(
                (item) => item.name !== location.name
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
