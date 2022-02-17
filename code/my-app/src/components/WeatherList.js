import React, { useState, useEffect } from 'react';

import { APIkey } from '../utils/constants';
import deleteIcon from '../assets/delete.svg';
import SearchLocation from './SearchLocation';
import snowIcon from '../assets/snow.svg';
import styled from 'styled-components';

const CurrentWeather = () => {
  const [locations, setLocations] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // if (searchValue) {
    // onFormSubmit();
    return () => {
      setLocations([]);
      setError('');
    };
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'GET',
    };
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&APPID=${APIkey}`,
      options
    )
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('No city found with that name..');
        }
        return res.json();
      })
      .then((data) => setLocations([data, ...locations]));

    //   if (data.cod === 404) {data => setError(data.message)} else {data => setLocations .....}

    // .then((res) => res.json())
    // .then((data) => setLocations([data, ...locations]))
    // .catch((error) => setError(error));

    // console.log(locations.length);
    // console.log(locations);
    console.log(error);
    setSearchValue('');
  };

  //sorting function depending on temperature, coldest to warmest.
  locations.sort((warmest, coldest) => {
    return warmest.main.temp - coldest.main.temp;
  });

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
    <StyledWeatherContainer>
      <SearchLocation
        onFormSubmit={onFormSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <WeatherCardContainer>
        {error ? (
          <p>No city found</p>
        ) : (
          locations.map((location) => (
            <StyledWeatherCard
              key={location.id}
              className={BackgroundSwitcher()}
            >
              <div
                style={{
                  display: 'flex',
                  height: 'inherit',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={snowIcon}
                  style={{ width: 50, height: 50 }}
                  alt='snow-icon'
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  justifyContent: 'space-around',
                }}
              >
                <h2 style={{ fontSize: '40px', margin: 0 }}>
                  {location.main.temp.toFixed(0)}°
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    margin: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  {location.name}
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  height: 'inherit',
                  // marginTop: '20px',
                  // marginRight: '-5px',
                  // marginLeft: '20px',
                }}
              >
                <DeleteButton
                  onClick={(event) => {
                    const updatedLocations = locations.filter(
                      (item) => item.id !== location.id
                    );
                    setLocations([...updatedLocations]);
                  }}
                  type='button'
                >
                  <img
                    src={deleteIcon}
                    alt='delete-icon'
                    style={{ height: '14px', width: '14px' }}
                  />
                </DeleteButton>
              </div>
            </StyledWeatherCard>
          ))
        )}
      </WeatherCardContainer>
      {locations.length > 1 && (
        <button onClick={onDeleteAll} type='button'>
          Remove all locations
        </button>
      )}
    </StyledWeatherContainer>
  );
};

//Styling
const StyledWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 20px; */
  width: 100vw;
`;

const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 15px; */
  width: 100vw;
  justify-content: center;
  align-items: center;
  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 850px;
  }
`;

const StyledWeatherCard = styled.div`
  display: grid;
  grid-template-columns: 120px auto 50px;
  align-items: center;
  border-radius: 5px;
  width: 90vw;
  max-width: 450px;
  height: 110px;
  margin: 5px;
  &.mid-temperature {
    background-color: #fac710;
  }
  &.high-temperature {
    background-color: #f24726;
  }
  &.low-temperature {
    background-color: #2d9bf0;
  }
  &.default {
    background-color: #fff;
  }
  @media (min-width: 992px) {
    grid-template-columns: 110px auto 50px;
    width: 30%;
  }
  /* background-color: ${(props) => props.BackgroundSwitcher || 'white'}; */
`;

const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: 0;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: #eee;
  cursor: pointer;
`;

export default CurrentWeather;
