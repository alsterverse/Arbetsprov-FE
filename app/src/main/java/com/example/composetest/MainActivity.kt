package com.example.composetest

import android.os.AsyncTask
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.filled.Close
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.sp
import com.android.volley.Request
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.example.composetest.ui.theme.robotoFonts
import org.json.JSONException
import org.json.JSONObject
import java.text.DecimalFormat
import android.widget.Toast



class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Surface(
                modifier = Modifier
                    .fillMaxSize()
                    .verticalScroll(rememberScrollState())
                ,
                color = MaterialTheme.colors.background
                        )
            {
                Column {
                    title()
                    citySearchField()

                    // city objects for weather composable
                    val places = mutableListOf<Place>(
                        Place("Stockholm", -5, "snowy"),
                        Place("Oslo", 10, "rainy", ),
                        Place("Rom", 30, "sunny" ),
                        Place("Paris", 25, "rainy" ),
                        Place("Berlin", 19, "sunny" )
                    )
                    // Sorted after temperature
                    places.sortBy {it.temperature}

                    // Displaying different places
                    for (item in places) {
                        weatherCard(item)
                    }
                }
            }
        }
    }
}

// used for previewing components

/*@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    ComposeTestTheme {
        weatherCard()
    }
}*/

@Composable
fun title(){

    Text(
        text = "Hur är vädret i...",
        modifier = Modifier
            .width(400.dp)
            .padding(top = 50.dp, bottom = 10.dp)
            .padding(horizontal = 40.dp),
        style = TextStyle(
            fontSize = 30.sp,
            textAlign = TextAlign.Center,
            lineHeight = 30.sp,
            fontFamily = robotoFonts,
            fontWeight = FontWeight.Black
        )
    )
}

@Composable
fun citySearchField() {
    val black = Color(red = 0.1f, green = 0.1f, blue = 0.1f)
    val grey = Color(red = 0.5f, green = 0.5f, blue = 0.5f)
    val white = Color(red = 1f, green = 1f, blue = 1f)
    Column(Modifier.padding(26.dp)) {
        val textState = remember { mutableStateOf(TextFieldValue()) }
        TextField(
            value = textState.value,
            onValueChange = { textState.value = it },
            label = { Text("Plats:", fontWeight = FontWeight.Bold)
                    },
            colors = TextFieldDefaults.textFieldColors(
                cursorColor= black,
                focusedLabelColor = black,
                unfocusedLabelColor = grey,
                backgroundColor = white,
                focusedIndicatorColor = Color.Transparent, //hides the indicator when typing
                unfocusedIndicatorColor = grey
            ),
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 2.dp)
                .scale(scaleY = 1.08f, scaleX = 1f),
                    trailingIcon = {
                        Icon(
                            Icons.Filled.Add, "",
                            tint = Color(red = 0f, green = 0f, blue = 0f,
                            ))
                        IconButton(onClick = {}){
                            // TODO: Get weather from city and add weather card when "+" clicked
                        }
            },
        )

        if (textState.value.text == "wrong"){
            Text("Det finns ingen stad som matchar din sökning ")
            // TODO: show this message when no city is found instead of having user type "wrong"
        }
    }
}

@Composable
fun weatherCard(place: Place) {
    val backgroundColorRed = Color(242, 71, 38)
    val backgroundColorYellow = Color(250, 199, 16)
    val backgroundColorBlue = Color(45, 155, 240)
    var background = backgroundColorRed
    var icon = R.drawable.sun
    var temp = place.temperature
    val city = place.city
    val weatherType = place.weatherType

    // Changing Icon Based on weather
    when (weatherType) {
        "sunny" -> icon = R.drawable.sun
        "rainy" -> icon = R.drawable.cloudy
        "snowy" -> icon = R.drawable.snow
    }

    //Changing card background based on temperature or rain
    if (weatherType == "rainy" || temp < 0 ){
        background = backgroundColorBlue
    }

    else if (temp in 1..19) {
        background = backgroundColorYellow
        }

    Card(
        backgroundColor = background,
        //border = BorderStroke(2.dp, Color.Gray),
        modifier = Modifier
            .padding(horizontal = 15.dp, vertical = 7.dp)
            .fillMaxWidth(1f)
            .height(100.dp)
    ){
         Row(
             verticalAlignment = Alignment.CenterVertically,
             modifier = Modifier.padding(20.dp)
         ) {
             Image(
                 painter = painterResource(icon),
                 contentDescription = "weather icon",
                 colorFilter = ColorFilter.tint(Color.White),
                 modifier = Modifier.size(width = 40.dp, height = 40.dp)
             )
             Column{
                 Text(text = "$temp°",
                     modifier = Modifier.padding(horizontal = 15.dp),
                     style = TextStyle(
                         fontSize = 30.sp,
                         textAlign = TextAlign.Center,
                         fontFamily = robotoFonts,
                         fontWeight = FontWeight.Black,
                         color = Color.White,
                         )
                     )
                 Text(text = "$city".uppercase(),
                     modifier = Modifier.padding(horizontal = 15.dp, vertical = 1.dp),
                     style = TextStyle(
                         fontSize = 10.sp,
                         textAlign = TextAlign.Center,
                         lineHeight = 30.sp,
                         fontFamily = robotoFonts,
                         fontWeight = FontWeight.Bold,
                         color = Color.White
                        )
                     )
                }
         }
        FloatingActionButton(
            onClick = {},

            backgroundColor = Color.White,
            contentColor = Color.Black,
            modifier =
            Modifier
                .size(64.dp)
                .padding(start = 337.dp, bottom = 75.dp, top = 3.dp, end = 4.dp),
            content = {
                Icon(Icons.Filled.Close,
                    contentDescription = "Test FAB",
                )
            }
        )
    }
}

// Class to handle cities
class Place(city: String, temperature: Int, weatherType: String) {
    val city = city
    val temperature = temperature
    val weatherType = weatherType
}

//function to call API to get a city temperature
//TODO: understand why it doesn't work with compose
/*fun getWeatherDetails(city: String)  {
    val url = "https://api.openweathermap.org/data/2.5/weather"
    val appid = "4e8b2c5f5ed98fa095894bb14ef0043c"
    var df = DecimalFormat("#.#")
    var tempUrl = ""
    tempUrl = "$url?q=$city&appid=$appid"

    val stringRequest = StringRequest(
        Request.Method.POST, tempUrl,
        { response ->
            var output = ""
            try {
                val jsonResponse = JSONObject(response)
                val jsonObjectMain = jsonResponse.getJSONObject("main")
                val temperature = jsonObjectMain.getDouble("temp") - 273.15
                output += """
                             Temp: ${df.format(temperature)} °C
                             """
            } catch (e: JSONException) {
                e.printStackTrace()
            }
        }
    ) { error ->
        Toast.makeText(
            applicationContext,
            error.toString().trim { it <= ' ' },
            Toast.LENGTH_SHORT
        ).show()
    }
    val requestQueue = Volley.newRequestQueue(applicationContext)
    requestQueue.add(stringRequest)
}*/
