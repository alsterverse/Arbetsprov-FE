import './Searchresult.css';
import React, { useState, useEffect } from 'react';
import DeleteIcon from '../../assets/CloseButton.svg';

const SearchResult = ({savedWeatherData, weatherData, error, removeItem}) => {

  let storedWeatherData = localStorage.getItem('WeatherSearch');
  let parsedWeatherData = JSON.parse(storedWeatherData);

  return (
    <div className="Searchresult">
            {weatherData !== null ? (
              <React.Fragment>
                <div className={`WeatherItem 
                  ${(weatherData.current.temperature >= '20') ? `hightemperature` : ''}
                  ${(weatherData.current.temperature <= '19') ? `mediumtemperature` : ''}
                  ${(weatherData.current.temperature <= '0') ? `lowtemperature` : ''}
                  ${(weatherData.current.weather_descriptions == "Rain") ? `raining` : ''}`                    
                  }>     
                  {/* <div className={`WeatherIcon
                  
                  {if (${(weatherData.current.weather_descriptions == 'Sunny') `sun`) else ( {`fallback`})

                  `} /> */}

                  <div className={`WeatherIcon ${(weatherData.current.weather_descriptions)}`} />
                  <div>
                    <div className="Degrees">{weatherData.current.temperature}</div>
                    <div className="NameOfCity">{weatherData.location.name}</div>
                  </div>
                </div>
              </React.Fragment>
            ) : ( <p>{error}</p> )
          }
          {parsedWeatherData != null || parsedWeatherData.length >= 0 ? 
              (parsedWeatherData.map((weatherCard, i) => {
                return(
                <div key={weatherCard[i]} className={`WeatherItem 
                ${(weatherCard.current.temperature >= '20') ? `hightemperature` : ''}
                ${(weatherCard.current.temperature <= '19') ? `mediumtemperature` : ''}
                ${(weatherCard.current.temperature <= '0') ? `lowtemperature` : ''}
                ${(weatherCard.current.weather_descriptions == "Rain") ? `raining` : ''}`                    
              }>     
                <div className={`WeatherIcon ${(weatherCard.current.weather_descriptions)}`} />
                <div>
                  <div className="Degrees">{weatherCard.current.temperature}</div>
                  <div className="NameOfCity">{weatherCard.location.name}</div>
                </div>
                <button type="button" className="DeleteIcon" onClick={e => removeItem(i)}>
                  <img src={DeleteIcon} alt="DeleteIcon" />
                </button>
              </div>)
              })) : ''
          }
    </div>
  );
};

export default SearchResult;