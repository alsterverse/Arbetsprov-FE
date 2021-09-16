import { CityData } from "./interfaces";

// Den här är för jobbig att type:a! :D sry!
// Finns det något smart sätt?
export const formatCityData = (city: any) => {
    
    return { 
            id: Math.floor(Math.random() * 10), 
            name: city.location.name, 
            temperature: city.current.temperature, 
            weatherDesc: city.current.weather_descriptions[0], 
            weatherIcon: city.current.weather_icons[0]
        };
}

export const sortCities = (cities: CityData[]) => {
    let sortedCities = cities.sort((a: any, b: any) => {
        return a.temperature - b.temperature;
    })

    return sortedCities;
}