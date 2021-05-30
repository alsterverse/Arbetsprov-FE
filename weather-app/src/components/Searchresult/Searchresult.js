import './Searchresult.css';
import './SearchresultWeatherIcon.css';
import React from 'react';

const SearchResult = ({createItem, weatherData, error, removeItem}) => {

  let storedWeatherData = localStorage.getItem('WeatherSearch');
  let parsedWeatherData = JSON.parse(storedWeatherData);
  
  return (
    <div className="Searchresult">
            {weatherData !== null ? (
              <React.Fragment>
                <div className={`WeatherItem  
                  ${(weatherData.current.temperature >= '20') ? `HighTemperature` : ''}
                  ${(weatherData.current.temperature <= '19') ? `MediumTemperature` : ''}
                  ${(weatherData.current.temperature <= '0') ? `LowTemperature` : ''}
                  ${(weatherData.current.weather_descriptions == "Light Rain") ? `Raining` : ''}
                  ${(weatherData.current.weather_descriptions == "Rain") ? `Raining` : ''}
                  ${(weatherData.current.weather_descriptions == "Patchy") ? `Raining` : ''}
                  ${(weatherData.current.weather_descriptions == "Moderate or heavy rain shower") ? `Raining` : ''}  
                  ${(weatherData.current.weather_descriptions == "Light Rain, Light Rain And Hail With Thunderstorm, Squalls") ? `Raining` : ''}      
                `}>     
                  <div className={`WeatherIcon 
                    ${(weatherData.current.weather_descriptions)}
                    ${(weatherData.current.is_day === 'no') ? 'Is_Night' : ''}
                  `} />
                  <div>
                    <div className="Degrees">{weatherData.current.temperature}</div>
                    <div className="NameOfCity">{weatherData.location.name}</div>
                  </div>
                  <button type="button" className="AddButton" onClick={createItem} />
                </div>
              </React.Fragment>
            ) : ( <span id="error">{error}</span> )
          }
          {parsedWeatherData && 
              (parsedWeatherData.map((weatherCard, i) => {
                return (
                  <div key={weatherCard[i]} className={`WeatherItem 
                    ${(weatherCard.current.temperature >= '20') ? `HighTemperature` : ''}
                    ${(weatherCard.current.temperature <= '19') ? `MediumTemperature` : ''}
                    ${(weatherCard.current.temperature <= '0') ? `LowTemperature` : ''}
                    ${(weatherCard.current.weather_descriptions == "Light Rain") ? `Raining` : ''}
                    ${(weatherCard.current.weather_descriptions == "Rain") ? `Raining` : ''}
                    ${(weatherCard.current.weather_descriptions == "Patchy") ? `Raining` : ''}
                    ${(weatherCard.current.weather_descriptions == "Moderate or heavy rain shower") ? `Raining` : ''}
                    ${(weatherCard.current.weather_descriptions == "Light Rain, Light Rain And Hail With Thunderstorm, Squalls") ? `Raining` : ''}
                    
                  `}>        
                    <div className={`WeatherIcon 
                      ${(weatherCard.current.weather_descriptions)}
                      ${(weatherCard.current.is_day === 'no') ? 'Is_Night' : ''}
                    `}/>
                    <div>
                      <div className="Degrees">{weatherCard.current.temperature}</div>
                      <div className="NameOfCity">{weatherCard.location.name}</div>
                    </div>
                    <button type="button" className="DeleteButton" onClick={e => removeItem(i)} />
                  </div>)
              }))
          }
    </div>
  );
};

export default SearchResult;