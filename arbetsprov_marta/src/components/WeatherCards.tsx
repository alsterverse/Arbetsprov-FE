import React, { useEffect, useState } from "react";
import ICityData from "../interfaces/ICityData";
import close from "./../icons/CloseButton.svg";
import sun from "./../icons/sun.svg";
import rain from "./../icons/cloud-rain.svg";
import snow from "./../icons/cloud-snow.svg";
import partlycloudy from "./../icons/cloud-day.svg";
import night from "./../icons/moon.svg";
import cloudynight from "./../icons/cloud-night.svg";
import cloud from "./../icons/cloudy.svg";

interface IWeatherProps {
  weatherData: ICityData;
  handleDeleteWeatherCard: (cityData: ICityData) => void
}

function WeatherCards(props: IWeatherProps) {
  const [tempClass, setTempClass] = useState("#fff");
  const [icon, setIcon] = useState(sun);
  
  useEffect(() => {
    setWeatherIcon();
    setWeatherColor();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.weatherData]);

  function setWeatherColor(){
    if (props.weatherData.current.weather_descriptions[0] === "Rain") {
      setTempClass("#2D9BF0");
    } else if (props.weatherData.current.temperature >= 20) {
      setTempClass("#F24726");
    } else if (
      props.weatherData.current.temperature >= 1 &&
      props.weatherData.current.temperature <= 19
    ) {
      setTempClass("#FAC710");
    } else if (props.weatherData.current.temperature <= 0) {
      setTempClass("#2D9BF0");
    }
  }

  function setWeatherIcon() {
    if (props.weatherData.current.weather_descriptions[0] === "Rain") {
      setIcon(rain);
    } else if (
      props.weatherData.current.weather_descriptions[0] === "Sunny" &&
      props.weatherData.current.is_day === "yes"
    ) {
      setIcon(sun);
    } else if (props.weatherData.current.weather_descriptions[0] === "Snow") {
      setIcon(snow);
    } else if (
      props.weatherData.current.weather_descriptions[0] === "Partly cloudy" &&
      props.weatherData.current.is_day === "yes"
    ) {
      setIcon(partlycloudy);
    } else if (
      props.weatherData.current.weather_descriptions[0] === "Overcast" &&
      props.weatherData.current.is_day === "yes"
    ) {
      setIcon(cloud);
    } else if (
      props.weatherData.current.weather_descriptions[0] === "Clear" &&
      props.weatherData.current.is_day === "no"
    ) {
      setIcon(night);
    } else if (
      props.weatherData.current.weather_descriptions[0] === "Partly cloudy" &&
      props.weatherData.current.is_day === "no"
    ) {
      setIcon(cloudynight);
    }
  }

  return (
    <div className="weather-card" style={{ backgroundColor: tempClass }}>
      <img className="icon" src={icon} alt="" />
      <div className="text-wrap">
        <span className="weather-temperature">
          {props.weatherData.current.temperature}°
        </span>
        <span className="weather-location">
          {props.weatherData.location.name}
        </span>
      </div>
      <button onClick={() =>{ props.handleDeleteWeatherCard(props.weatherData)}} className="close-btn">
        <img className="close-img" src={close} alt="" />
      </button>
    </div>
  );
}

export default WeatherCards;
