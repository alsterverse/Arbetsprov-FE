export interface CityData {
    id: number,
    name: string,
    temperature: number,
    weatherDesc: string,
    weatherIcon: string
}

export interface CitiesState {
    cities: {
        id: number,
        name: string,
        temperature: number,
        weather: string
    }[] 
}