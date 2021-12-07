import './WeatherSearch.css'
import { ACCESS_TOKEN } from '../ACCESS_TOKEN.js'
import union from '../icons/Union.svg'
import axios from 'axios'
import { useState } from 'react'

const WeatherSearch = () => {
	const [location, setLocation] = useState('')
	const [savedWeather, setSavedWeather] = useState([])
	const [showError, setShowError] = useState(false)
	const BASE_URL = 'http://api.weatherstack.com/current?access_key='

	const getWeather = async () => {
		const url = `${BASE_URL}${ACCESS_TOKEN}&query=${location}`
		try {
			const response = await axios.get(url)
			return response.data
		} catch (error) {
			console.log(error);
		}
	}

	const add = async () => {
		const responseData = await getWeather()

		if (responseData.success === false) {
			setShowError(true)
		} else {
			setSavedWeather([...savedWeather, responseData])
		}

		console.log(savedWeather);
	}


	return (
		<section className="weather-search">
			<h1>Hur är vädret i...</h1>
			<section className="search-bar">
				<label htmlFor="location">Plats:</label>
				<input type="text" name="location" id="location" onChange={e => setLocation(e.target.value)} onFocus={() => setShowError(false)} />
				<img src={union} alt="search button" onClick={add} />
				{showError ? <p className="error-msg">Det finns ingen stad som matchar din sökning</p> : ''}
			</section>
		</section >
	)
}

export default WeatherSearch