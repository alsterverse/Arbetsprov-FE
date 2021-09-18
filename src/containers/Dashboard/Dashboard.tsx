import CitiesList from "../../components/CitiesList/CitiesList";
import Input from "../../components/UI/Input/Input";

import { getCity } from "../../api/weatherStack";

import { useState } from "react";

import { CitiesState, CityData } from './../../interfaces';

import { formatCityData, sortCities } from './../../helpers';


const Dashboard = () => {

    const [cities, setCities] = useState<CitiesState["cities"]>([
        { id: 123, name: "Stockholm", temperature: 22, weatherDesc: "sunny"},
    ]);

    // Ovan vid att använda fetch. Ytterligare ett experiment.
    // Detta e nog inte best practice rent syntaxmässigt.
    //! Troligtvis även att jag cause:ar side effects här och borde använda
    //! En useEffect-hook. Fixa in case of time.
    const searchCity = (searchString: string) => {
        let query = getCity(searchString);

        query.then(resp => {
            if(resp.error) {
                console.log("this is error");
            } else {
                let newCity: any = formatCityData(resp);
                addCity(newCity);
            }
        })
    }

    const addCity = (newCity: any) => {
        let newState = [...cities];
        newState.push(newCity);
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
            <Input />
            <CitiesList cities={cities} remove={removeCity} />
            <button onClick={() => { searchCity("Helsinki") }}>Test API</button>
            {/* <button onClick={() => addCity()}>Add city</button> */}
        </>
    )
}

export default Dashboard;
