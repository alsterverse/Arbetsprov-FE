import CityCard from '../CityCard/CityCard';
import Grid from '../UI/Grid/Grid';


const CitiesList = ({cities, remove}: any) => {

    return(
        <Grid>
            { cities.map((city: any) => {
                return (
                    // Consider other solution 
                    // for this extra wrapping div.
                    // E.g. "grid-item"
                    <div key={city.id}>      
                        <CityCard
                            {...city}
                            key={city.id}
                            remove={remove} />
                    </div>
                )  
            })}
        </Grid>
    )
}

export default CitiesList;