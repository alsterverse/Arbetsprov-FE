package com.example.weather_app

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

class MainViewModel {

    private val _weatherList = MutableStateFlow<List<WeatherCard>>(emptyList())
    val weatherList : StateFlow<List<WeatherCard>> = _weatherList

    fun onClickAddLocation(loc: String) {
        _weatherList.value = _weatherList.value + WeatherCard(20, loc, "")
    }
}