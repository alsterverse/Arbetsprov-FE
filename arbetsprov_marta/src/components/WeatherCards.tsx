import React, { useEffect, useState } from "react";
import IWeatherData from "../interfaces/IWeatherData";
import Union from "./../icons/Union.svg";
import close from "./../icons/CloseButton.svg";
import sun from "./../icons/sun.svg";
import rain from "./../icons/cloud-rain.svg";
import snow from "./../icons/cloud-snow.svg";
import partlycloudy from "./../icons/cloud-day.svg";
import night from "./../icons/moon.svg";
import cloudynight from "./../icons/cloud-night.svg";
import cloud from "./../icons/cloudy.svg";

interface IWeatherProps {
  weatherData: IWeatherData;
  handleDeleteWeatherCard: (cityData: IWeatherData) => void;
}

function WeatherCards(props: IWeatherProps) {
  const [color, setColor] = useState("#fff");
  const [icon, setIcon] = useState(Union);

  const weatherDescription = props.weatherData.current.weather_descriptions[0];
  const isDay = props.weatherData.current.is_day;
  const temperature = props.weatherData.current.temperature
  useEffect(() => {
    setWeatherIcon();
    setWeatherColor();
  }, [props.weatherData]);

  function setWeatherColor() {
    if (weatherDescription === "Rain") {
      setColor("#2D9BF0");
    } else if (temperature >= 20) {
      setColor("#F24726");
    } else if (temperature >= 1 && temperature <= 19) {
      setColor("#FAC710");
    } else if (temperature <= 0) {
      setColor("#2D9BF0");
    }
  }

  function setWeatherIcon() {
    if (weatherDescription === "Rain") {
      setIcon(rain);

    } else if (weatherDescription === "Sunny" && isDay === "yes") {
      setIcon(sun);

    } else if (weatherDescription === "Snow") {
      setIcon(snow);

    } else if (weatherDescription === "Partly cloudy" && isDay === "yes" ) {
      setIcon(partlycloudy);

    } else if (weatherDescription === "Overcast" && isDay === "yes" ) {
      setIcon(cloud);

    } else if (weatherDescription === "Clear" &&  isDay === "no" ) {
      setIcon(night);

    } else if (weatherDescription === "Partly cloudy" && isDay === "no" ) {
      setIcon(cloudynight);

    }
  }

  return (
    <div className="weather-card" style={{ backgroundColor: color }}>
      <img className="icon" src={icon} alt="" />
      <div className="text-wrap">
        <span className="weather-temperature">
          {temperature}°
        </span>
        <span className="weather-location">
          {props.weatherData.location.name}
        </span>
      </div>
      <button
        className="close-btn"
        onClick={() => {
          props.handleDeleteWeatherCard(props.weatherData);
        }}
      >
        <img className="close-img" src={close} alt="" />
      </button>
    </div>
  );
}

export default WeatherCards;
