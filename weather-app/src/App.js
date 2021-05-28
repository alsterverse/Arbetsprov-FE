import './App.css';
import React, {useState} from 'react';
import Searchresult from '../src/components/Searchresult/Searchresult.js';
import Searchbar from './components/Searchbar/Searchbar';

const App = () => {

  const API_KEY = "e12ae8aeaf06dc4511ff0f42a50608e2";
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
    
    fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${search}`)
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
    <div className="App">
        <Searchbar weatherData={weatherData} search={search} setSearch={setSearch} getData={getData} createItem={createItem}/>
        <Searchresult savedWeatherData={savedWeatherData} weatherData={weatherData} error={error} search={search} setSearch={setSearch} getData={getData} removeItem={removeItem}/>
    </div>
  )
}

export default App;














// const access_key = '4b40637d336dc05331ae1c8f35a51d4c';

// class App extends React.Component {
//   state = {
//       temperature: undefined,
//       city: undefined,
//       description: undefined,
//       error: undefined
//   }

//   getWeatherData = async (e) => {
//       e.preventDefault();
//       const city = e.target.elements.city.value;
//       const api_call = await fetch(`http://api.weatherstack.com/current?access_key=${access_key}&query=${city}`)
//   }

//   render(){
//       return(
//           <React.Fragment>
//               <Searchbar />
//               <Searchresult />
//           </React.Fragment>
//       )
//   }
// }

// export default App;