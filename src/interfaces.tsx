export interface CityData {
    id: number,
    name: string,
    temperature: number,
    weatherDesc: string
}

export interface CitiesState {
    cities: CityData[] 
}