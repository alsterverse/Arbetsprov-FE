import CityCard from '../CityCard/CityCard';

import { CitiesState } from './../../interfaces';


const CitiesList: React.FC<CitiesState> = ({ cities }) => {

    return(
        <>
            { cities.map(city => {
                return <CityCard
                    {...city}
                    key={city.id} /> 
            })}
        </>
    )
}

export default CitiesList;