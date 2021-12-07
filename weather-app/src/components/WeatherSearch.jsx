import './WeatherSearch.css'
import { ACCESS_TOKEN } from '../ACCESS_TOKEN.js'
import union from '../icons/Union.svg'

const WeatherSearch = () => {
	return (
		<section className="weather-search">
			<h1>Hur är vädret i...</h1>
			<section className="search-bar">
				<label htmlFor="location">Plats:</label>
				<input type="text" name="location" id="location" />
				<img src={union} alt="search button" />
			</section>
		</section >
	)
}

export default WeatherSearch