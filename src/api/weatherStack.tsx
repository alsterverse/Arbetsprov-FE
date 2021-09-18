
export const getCity = async (searchString: string): Promise<any> => {
    
    // Normalt sett så hade jag velat jobba med options-objekt här istället,
    // för långa strängen, men kommer inte överens med TypeScript i denna fråga :D
    const response = await fetch(
        'http://api.weatherstack.com/current?access_key=' + 
        process.env.REACT_APP_WEATHER_API_KEY + '&query=' + 
        searchString
    );

    return await response.json();
}

