package com.example.weather_app

interface WeatherManager {
    fun getWeather(location: String): WeatherCard
}