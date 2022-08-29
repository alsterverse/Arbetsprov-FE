package com.example.weather_app

import com.google.gson.Gson
import okhttp3.MediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import java.net.URL

class WeatherManagerAPI : WeatherManager {

    private val client = OkHttpClient()

    override fun getWeather(location: String) : WeatherCard{
        try{
            val request = Request.Builder().url("http://api.weatherstack.com/current?access_key=c8b754a788fa610e530cf8fe62d0d189&query=$location").build()
            val json = client.newCall(request).execute()
            val content = Gson().fromJson(json.body?.string(), WeatherAPIData::class.java)
            return WeatherCard(content.current.temperature, content.location.name, content.current.weather_icons[0])
        }
        catch (ex: Exception){
            println(ex)
            return WeatherCard(0, "", "")
        }
    }
}