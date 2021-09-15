import CitiesList from "../../components/CitiesList/CitiesList";

import { getCity } from "../../api/weatherStack";

import { useState } from "react";

import { CitiesState, CityData } from './../../interfaces';

import { formatCityData } from './../../helpers';

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

    const [cities, setCities] = useState<CitiesState["cities"]>([
        { id: 123, name: "Stockholm", temperature: 22, weatherDesc: "sunny"},
        { id: 456, name: "Copenhagen", temperature: 10, weatherDesc: "rainy"},
        { id: 789, name: "Oslo", temperature: -4, weatherDesc: "cloudy"}
    ]);

    const addCity = () => {
        // Get data via API
        // Add city to state
    }

    const removeCity = (id: number) => {
        // Remove city from state
    }

    return(
        <>
            <div>This is dashboard</div>
            <CitiesList cities={cities} />
            <button onClick={() => { runAPI() }}>Test API</button>
        </>
    )
}

export default Dashboard;
