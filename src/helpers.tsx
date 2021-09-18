import { CityData } from "./interfaces";

export const formatCityData = (city: any) => {
    
    return { 
            id: Math.floor(Math.random() * 1000), 
            name: city.location.name, 
            temperature: city.current.temperature, 
            weatherDesc: city.current.weather_descriptions[0], 
            weatherIcon: city.current.weather_icons[0]
        };
}

export const sortCities = (cities: CityData[]) => {
    let sortedCities = cities.sort((a: any, b: any) => {
        return b.temperature - a.temperature;
    })

    return sortedCities;
}