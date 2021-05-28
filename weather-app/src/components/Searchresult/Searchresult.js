import './Searchresult.css';
import React from 'react';
import ClosingIcon from '../../assets/CloseButton.svg';

const SearchResult = ({weatherData, error}) => {
  
  return (
    <div>
            {weatherData !== null ? (
              <React.Fragment>
                  <div className="Searchresult">

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
                      <button type="button" className="ClosingIcon">
                      <img src={ClosingIcon} alt="ClosingIcon" />
                      </button>
                    </div>
                  </div>
                </React.Fragment>
            ) : (
                <p>{error}</p>
            )
        }
    </div>
  );
};

export default SearchResult;