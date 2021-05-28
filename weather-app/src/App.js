import './App.css';
import React, {useState} from 'react';
import Searchresult from '../src/components/Searchresult/Searchresult.js';
import Searchbar from './components/Searchbar/Searchbar';

const App = () => {

  const API_KEY = "e12ae8aeaf06dc4511ff0f42a50608e2";
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [savedWeatherData] = useState([]);

  const createItem = () => {
  // localStorage.setItem('');

  savedWeatherData.push(weatherData);

  console.log(savedWeatherData);
  const stringifiedWeatherData = JSON.stringify(savedWeatherData);



  console.log(stringifiedWeatherData);
  localStorage.setItem('WeatherSearch', stringifiedWeatherData)

  }

  const getData = e => {
    e.preventDefault();
    console.log(e);
    console.log('DU har tryck på enter')
    
    fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${search}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.error){
        setError('Det finns ingen stad som matchar din sökning.');
        return;
      } else {
        setWeatherData(data);
        // const stringifiedWeatherData = JSON.stringify(weatherData);
        // console.log(stringifiedWeatherData);
      }
    });
    setSearch("");
  };

  return(
    <div className="App">
        <Searchbar search={search} setSearch={setSearch} getData={getData} createItem={createItem}/>
        <Searchresult weatherData={weatherData} error={error} search={search} setSearch={setSearch} getData={getData}/>
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