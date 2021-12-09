import './WeatherCard.css'
import union from '../icons/Union.svg'
import sun from '../icons/sun.svg'
import snow from '../icons/snow.svg'
import lightsnow from '../icons/lightsnow.svg'
import partlycloudynight from '../icons/partlycloudynight.svg'
import partlycloudy from '../icons/partlycloudy.svg'
import cloudy from '../icons/cloudy.svg'
import rain from '../icons/rain.svg'
import lightrain from '../icons/lightrain.svg'
import moon from '../icons/moon.svg'


const WeatherCard = ({ weatherObj, index, removeWeather }) => {
	const weatherType = weatherObj.current.weather_descriptions[0]

	let color = 'yellow'
	if (weatherObj.current.temperature <= 0 || weatherType === "Rain" || weatherType === "Light Rain Shower") {
		color = 'blue'
	} else if (weatherObj.current.temperature >= 20) {
		color = 'red'
	}

	const dayTime = weatherObj.current.is_day === "yes" ? true : false
	let weatherImg
	switch (weatherType) {
		case "Sunny":
			weatherImg = sun
			break

		case "Rain":
			weatherImg = rain
			break

		case "Light Rain Shower":
			weatherImg = lightrain
			break

		case "Snow":
			weatherImg = snow
			break

		case "Light Snow Grains, Light Snow":
		case "Light Snow":
			weatherImg = lightsnow
			break

		case "Overcast":
			weatherImg = cloudy
			break

		case "Partly cloudy":
			weatherImg = dayTime ? partlycloudy : partlycloudynight
			break

		case "Clear":
			weatherImg = moon
			break

		default:
			weatherImg = union
	}


	return (
		<section className={`weather-card ${color}`}>
			<div className="weather-info">
				<img src={weatherImg} alt={`${weatherType} weather`} className="weather-img" />
				<div className="weather-text">
					<h2 className="degrees">{weatherObj.current.temperature}°</h2>
					<p className="city">{weatherObj.location.name}</p>
				</div>
			</div>
			<img src={union} alt="remove weather" className="remove-btn" onClick={() => removeWeather(index)} />
		</section>
	)
}

export default WeatherCard