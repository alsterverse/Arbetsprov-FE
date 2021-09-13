import CityCard from '../CityCard/CityCard';

interface Props {
    cities: {
        id: number,
        name: string,
        temperature: number,
        weather: string
    }[] 
}

const CitiesList: React.FC<Props> = ({ cities }) => {

    return(
        <div>
            { cities.map(city => {
                return <CityCard
                    {...city}
                    key={city.id} /> 
            })}
        </div>
    )
}

export default CitiesList;