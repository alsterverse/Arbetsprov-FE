package com.example.weather_app

import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import kotlinx.coroutines.flow.*

class MainViewModel {

    private val _weatherList = MutableStateFlow<List<WeatherCard>>(emptyList())
    val weatherList : StateFlow<List<WeatherCard>> = _weatherList

    val weatherManager : WeatherManager = WeatherManagerAPI()

    @DelicateCoroutinesApi
    fun onClickAddLocation(loc: String) {
        GlobalScope.async {
            val card = weatherManager.getWeather(loc)
            _weatherList.value = _weatherList.value + card
        }
    }
}