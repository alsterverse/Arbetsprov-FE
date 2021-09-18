export interface CityData {
    id: number,
    name: string,
    temperature: number,
    weatherDesc: string
}

export interface CitiesState {
    cities: CityData[] 
}

export interface UiState {
    error: boolean,
    errorMessage: string,
    searchString: string
}