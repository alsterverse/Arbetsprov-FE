import './WeatherSearch.css'
import { ACCESS_TOKEN } from '../ACCESS_TOKEN.js'
import union from '../icons/Union.svg'
import axios from 'axios'
import { useState } from 'react'
import WeatherCard from './WeatherCard'

const WeatherSearch = () => {
	const [location, setLocation] = useState('')
	const [savedWeather, setSavedWeather] = useState([])
	const [showError, setShowError] = useState(false)
	const BASE_URL = 'http://api.weatherstack.com/current?access_key='

	const getWeather = async () => {
		const url = `${BASE_URL}${ACCESS_TOKEN}&query=${location}`
		try {
			const response = await axios.get(url)
			console.log(response.data);
			return response.data
		} catch (error) {
			console.log(error);
		}
	}

	const add = async (event) => {
		event.preventDefault();
		const responseData = await getWeather()

		if (responseData.success === false) {
			setShowError(true)
		} else {
			let weatherArr = [...savedWeather, responseData]
			weatherArr.sort((a, b) => a.current.temperature - b.current.temperature)
			setSavedWeather(weatherArr)
			setLocation('')
		}

	}

	const removeWeather = (indexToRemove) => {
		const weatherArr = savedWeather.filter((weather, index) => index !== indexToRemove)
		setSavedWeather(weatherArr)
	}


	return (
		<section className="weather-search">
			<h1>Hur är vädret i...</h1>

			<form className="search-bar" onSubmit={add}>
				<label htmlFor="location">Plats:</label>

				<input
					type="text"
					name="location"
					id="location"
					onChange={e => setLocation(e.target.value)}
					onFocus={() => setShowError(false)}
					value={location}
				/>

				<input type="image" src={union} alt="search button" />

				{showError ? <p className="error-msg">Det finns ingen stad som matchar din sökning</p> : ''}
			</form>

			<section className="grid-cards">
				{savedWeather.map((weather, index) => (
					<WeatherCard weatherObj={weather} key={index} index={index} removeWeather={removeWeather} />
				))}
			</section>
		</section >
	)
}

export default WeatherSearch