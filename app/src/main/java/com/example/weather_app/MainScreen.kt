package com.example.weather_app

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun HowIsTheWeatherText() {
    Text(
        text = "Hur är vädret i...",
        modifier = Modifier.fillMaxWidth(),
        fontSize = 30.sp,
        textAlign = TextAlign.Center
    )
}

@Composable
fun DisplaySearchLocation(){
    Box(
        contentAlignment = Alignment.CenterStart, modifier = Modifier
            .size(200.dp, 50.dp)
            .clip(shape = RoundedCornerShape(20))
            .background(Color.Green)
    ) {
        Row(modifier = Modifier.padding(10.dp)) { // Search Component
            Text("Plats: ")

            var text by remember { mutableStateOf(TextFieldValue("Stockholm")) }

            BasicTextField(
                value = text.text,
                onValueChange = { str: String -> text = TextFieldValue(str) },
                Modifier.width(120.dp)
            )

            IconButton(
                onClick = { },
                modifier = Modifier.size(20.dp)
            ) { // TODO: Add place
                Icon(
                    painter = painterResource(id = android.R.drawable.ic_menu_add),
                    contentDescription = null
                )
            }
        }
    }
}

@Composable
fun DisplayLogo(resource: Int){
    Box {
        Image(
            painter = painterResource(id = resource),
            contentDescription = "",
            Modifier.size(100.dp)
        )
    }
}