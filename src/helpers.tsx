export const formatCityData = (city: any) => {
    
    return { 
            id: Math.floor(Math.random() * 10), 
            name: city.location.name, 
            temperature: city.current.temperature, 
            weatherDesc: city.current.weather_descriptions[0], 
            weatherIcon: city.current.weather_icons[0]
        };
}