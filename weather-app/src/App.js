import './App.css';
import React, {useState} from 'react';
import Searchresult from './components/Searchresult/Searchresult.js';
import Searchbar from './components/Searchbar/Searchbar.js';
import Footer from './components/Footer/Footer.js';

const App = () => {

  const AccessKey = "4272cdb329d2d79f8bf8bdcfd6dc1d96";
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [savedWeatherData, setSavedWeatherData] = useState([]);

  const createItem = () => {
    let localStorageList = localStorage.getItem('WeatherSearch');
    const parsedLocalStorageList = JSON.parse(localStorageList);
    if (localStorageList == null) {
      savedWeatherData.push(weatherData);
      const stringifiedWeatherData = JSON.stringify(savedWeatherData);
          localStorage.setItem('WeatherSearch', stringifiedWeatherData)
    } else {
      let isArray = Array.isArray(parsedLocalStorageList);
      if(isArray === false) {
        savedWeatherData.push(localStorageList)
        savedWeatherData.push(weatherData)
        localStorage.setItem('WeatherSearch', JSON.stringify(savedWeatherData));
      } else {
        parsedLocalStorageList.push(weatherData);
        localStorage.setItem('WeatherSearch', JSON.stringify(parsedLocalStorageList));
      }
    }
    setSearch('');
    setError('');
    setWeatherData(null);
    setSavedWeatherData(parsedLocalStorageList);
  }

  const removeItem = (e) => {
    let localStorageList = localStorage.getItem('WeatherSearch');
    const parsedLocalStorageList = JSON.parse(localStorageList);
    parsedLocalStorageList.splice(e,1);
    localStorage.setItem('WeatherSearch', JSON.stringify(parsedLocalStorageList));
    setSavedWeatherData(parsedLocalStorageList);
  }

  const getData = e => {
    e.preventDefault();    
    fetch(`http://api.weatherstack.com/current?access_key=${AccessKey}&query=${search}`)
    .then(res => res.json())
    .then(data => {
      if(data.error){
        setError('Det finns ingen stad som matchar din sökning.');
        return;
      } else {
        setWeatherData(data);
      }
    });
  };

  return(
    <React.Fragment>
    <div className="App">
        <Searchbar weatherData={weatherData} search={search} setSearch={setSearch} getData={getData} createItem={createItem}/>
        <Searchresult savedWeatherData={savedWeatherData} weatherData={weatherData} error={error} search={search} setSearch={setSearch} getData={getData} createItem={createItem} removeItem={removeItem}/>
    </div>
    <Footer />
    </React.Fragment>
  )
}

export default App;