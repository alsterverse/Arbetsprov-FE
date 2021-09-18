import CitiesList from "../../components/CitiesList/CitiesList";
import Input from "../../components/UI/Input/Input";

import { getCity } from "../../api/weatherStack";

import { useState } from "react";

import { CitiesState, UiState } from './../../interfaces';

import { formatCityData, sortCities } from './../../helpers';


const Dashboard = () => {

    const [cities, setCities] = useState<CitiesState["cities"]>([
        { id: 123, name: "Stockholm", temperature: 22, weatherDesc: "sunny"},
    ]);
    const [ui, setUi] = useState<UiState>({ error: false, errorMessage: "", searchString: ""});

    // Ovan vid att använda fetch. Ytterligare ett experiment.
    // Detta e nog inte best practice rent syntaxmässigt.
    //! Troligtvis även att jag cause:ar side effects här och borde använda
    //! en useEffect-hook. Fixa in case of time.
    const searchCity = (evt: any, searchString: string) => {
        evt.preventDefault();

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

    // Big noob-problems av någon anledning. Fallback till denna klumpiga lösningen
    // för att synka input-komponent med state.
    const handleSearchString = (evt: any) => {
        console.log(evt.target.value);
        let newState = {...ui};
        newState.searchString = evt.target.value;
        setUi(newState);        
    }
    
    return(
        <>
            <h1>Hur är vädret i...</h1>
            <Input
                value={ui.searchString}
                change={handleSearchString}
                error={ui.error} 
                errorMessage={ui.errorMessage} 
                onsubmit={(evt: any) => searchCity(evt, ui.searchString)} />
            <CitiesList 
                cities={cities} 
                remove={removeCity} />
        </>
    )
}

export default Dashboard;
