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
        { id: 123, name: "Stockholm", temperature: 14, weather: "sunny"},
        { id: 456, name: "Copenhagen", temperature: 15, weather: "rainy"}
    ]);

    return(
        <>
            <div>This is dashboard</div>
            <CitiesList cities={cities} />
            <button onClick={() => { runAPI() }}>Test API</button>
        </>
    )
}

export default Dashboard;
