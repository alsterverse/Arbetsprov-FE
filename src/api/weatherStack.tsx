
export const getCity = async (searchString: string): Promise<any> => {
    
    const response = await fetch(
        'http://api.weatherstack.com/current?access_key=' + 
        process.env.REACT_APP_WEATHER_API_KEY + '&query=' + 
        searchString
    );

    return await response.json();
}

