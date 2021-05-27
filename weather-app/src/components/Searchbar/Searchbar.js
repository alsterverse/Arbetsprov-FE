import React, { useState } from 'react';
import './Searchbar.css';
import axios from 'axios';

function Searchbar() {  
  
  // const initialValues = {
    //   city: "",
    // }
    
    const [inputValue, setInputValue] = useState("");
    const [location, setLocation] = useState("");
    const [humidity, setHumidity] = useState("")
    const [temperature, setTemperature] = useState("");
    const [rain, setRain] = useState("");
    
    function handleOnChange(e) {   
      setInputValue( {
        ...inputValue, 
        [e.target.name]:e.target.value
      } )
    }
    
    function handleSubmit(e) {
      e.preventDefault();
      console.log(inputValue.city)  
    }
    
    // const params = new URLSearchParams({
    //   access_key : '4b40637d336dc05331ae1c8f35a51d4c',
    //   query : 'Malmö'
    // })

    const baseURL = 'http://api.weatherstack.com/current';
    const access_key = new URLSearchParams ({
      access_key: '4b40637d336dc05331ae1c8f35a51d4c'
    });

    // const citySearch = inputValue.city;
    // const newCitySearch = JSON.stringify(citySearch)
    
    const query = new URLSearchParams({
      query: 'Malmö'
    });

    // const query = 'Malmö';


    const getData = () => {
    axios.get(`${baseURL}?${access_key}&${query}`).then((response)=> {
    console.log(response);
    console.log(baseURL + '?' + access_key + '&' + query)
    setLocation(response.data.location.name);
    setHumidity("Luftfuktigheten är " + response.data.current.humidity + "%");
    setTemperature("Temperaturen är " + response.data.current.temperature + " grader");
    setRain(response.data.current.weather_descriptions);

    })
  }
  
  
  return (
    <div className="Searchbar">
      <h1>Hur är vädret i...</h1>
      <form id="InputContainer" onSubmit={handleSubmit}>
        <input id="searchInput" autoFocus placeholder="Plats:" name="city" value={inputValue.city}
            onChange={handleOnChange}/>
        <button type="submit" id="SaveSearch">+</button>
      </form>
      <button onClick={getData} id="SearchButton">Get Data</button>
      <div>{location}</div>
      <div>{humidity}</div>
      <div>{temperature}</div>
      {(rain == "Rain") ? <div>{rain}</div>
      : null }
    </div>
  );
}

export default Searchbar;