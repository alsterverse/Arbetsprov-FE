import CitiesList from "../../components/CitiesList/CitiesList";

import { getCity } from "../../api/weatherStack";

import { useState } from "react";

import { CitiesState, CityData } from './../../interfaces';

import { formatCityData, sortCities } from './../../helpers';

const runAPI = () => {
    let query = getCity('Stockholm');
    query.then((resp: any) => {
        let hello: CityData = formatCityData(resp);
        console.log(hello);
    }).catch((err: any) => {
        console.log(err);
    })
}

const Dashboard = () => {

    let mockData: any = [{ id: 456, name: "Copenhagen", temperature: 10, weatherDesc: "sunny"},
    { id: 789, name: "Oslo", temperature: -4, weatherDesc: "cloudy"},
    { id: 101, name: "Helsinki", temperature: 28, weatherDesc: "rainy"}]

    const [cities, setCities] = useState<CitiesState["cities"]>([
        { id: 123, name: "Stockholm", temperature: 22, weatherDesc: "sunny"},
    ]);

    const addCity = () => {
        let newState = [...cities];
        let itemToBeAdded = mockData.splice(-1)[0];
        newState.push(itemToBeAdded);

        newState = sortCities(newState);

        setCities(newState);
    }

    const removeCity = (id: number) => {
        let newState = [...cities];

        let cityIndex = newState.findIndex((el) => {
            return el.id === id;
        })

        newState.splice(cityIndex, 1);

        setCities(newState);

    }

    return(
        <>
            <h1>Hur är vädret i...</h1>
            <CitiesList cities={cities} remove={removeCity} />
            {/* <button onClick={() => { runAPI() }}>Test API</button> */}
            <button onClick={() => addCity()}>Add city</button>
        </>
    )
}

export default Dashboard;
