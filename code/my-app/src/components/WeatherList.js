import React, { useState } from 'react';
import styled from 'styled-components';

import SearchLocation from './SearchLocation';
import { APIkey } from '../utils/constants';
import deleteIcon from '../assets/delete.svg';
import snowIcon from '../assets/snow.svg';
import cloudyIcon from '../assets/cloudy.svg';
import sunIcon from '../assets/sun.svg';
import rainIcon from '../assets/rain.svg';
import {
  DeleteAllButton,
  DeleteButton,
  ButtonContainer,
} from './StyledButtons';
import {
  WeatherCardContainer,
  StyledWeatherCard,
  IconContainer,
  WeatherInfoContainer,
} from './StyledWeatherCard';

const StyledWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const CurrentWeather = () => {
  const [locations, setLocations] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');

  const isNewLocation = (locationId) => {
    const duplicate = locations.filter((item) => item.id === locationId);
    return duplicate.length === 0;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setError('');

    const options = {
      method: 'GET',
    };
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&APPID=${APIkey}`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.cod === 200 && isNewLocation(data.id)) {
          setLocations([data, ...locations]);
        } else if (data.cod === '404') {
          setError(data.message);
        } else {
          console.log(data);
        }
      });

    console.log(locations.length);
    console.log(locations);
    console.log(error);
    setSearchValue('');
  };

  //sorting function depending on temperature, coldest to warmest.
  locations.sort((coldest, warmest) => {
    return coldest.main.temp - warmest.main.temp;
  });

  const backgroundSwitcher = (locationTemperature, weather) => {
    if (weather === 'Rain' || weather === 'Drizzle') {
      return 'low-temperature';
    } else if (locationTemperature > 0 && locationTemperature < 20) {
      return 'mid-temperature';
    } else if (locationTemperature > 19) {
      return 'high-temperature';
    } else if (locationTemperature < 1) {
      return 'low-temperature';
    } else {
      return 'default';
    }
  };

  const iconSwitcher = (weather) => {
    if (weather === 'Clouds') {
      return cloudyIcon;
    } else if (weather === 'Rain' || weather === 'Drizzle') {
      return rainIcon;
    } else if (weather === 'Snow') {
      return snowIcon;
    } else if (weather === 'Clear') {
      return sunIcon;
    } else {
      return deleteIcon;
    }
  };

  const onDeleteAll = () => {
    setLocations([]);
    setError('');
  };

  return (
    <StyledWeatherWrapper>
      <SearchLocation
        onFormSubmit={onFormSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {error && <p>Det finns ingen stad som matchar din sökning :(</p>}
      <WeatherCardContainer>
        {locations.map((location) => (
          <StyledWeatherCard
            key={location.id}
            className={backgroundSwitcher(
              location.main.temp,
              location.weather[0].main
            )}
          >
            <IconContainer>
              <img
                src={iconSwitcher(location.weather[0].main)}
                alt='weather-icon'
              />
            </IconContainer>
            <WeatherInfoContainer>
              <h2>{location.main.temp.toFixed(0)}°</h2>
              <p>{location.name}</p>
            </WeatherInfoContainer>
            <ButtonContainer>
              <DeleteButton
                onClick={() => {
                  const updatedLocations = locations.filter(
                    (item) => item.id !== location.id
                  );
                  setLocations([...updatedLocations]);
                  setError('');
                }}
                type='button'
              >
                <img src={deleteIcon} alt='delete-icon' />
              </DeleteButton>
            </ButtonContainer>
          </StyledWeatherCard>
        ))}
      </WeatherCardContainer>
      {locations.length > 1 && (
        <DeleteAllButton onClick={onDeleteAll} type='button'>
          Clear all
        </DeleteAllButton>
      )}
    </StyledWeatherWrapper>
  );
};

export default CurrentWeather;
