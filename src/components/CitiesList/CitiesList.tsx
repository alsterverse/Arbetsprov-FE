import CityCard from '../CityCard/CityCard';

import { CitiesState } from './../../interfaces';

import Grid from '../UI/Grid/Grid';


const CitiesList: React.FC<CitiesState> = ({ cities }) => {

    return(
        <Grid>
            { cities.map(city => {
                return (
                    // Consider other solution 
                    // for this extra wrapping div.
                    // E.g. "grid-item"
                    <div key={city.id}>      
                        <CityCard
                            {...city}
                            key={city.id} />
                    </div>
                )  
            })}
        </Grid>
    )
}

export default CitiesList;