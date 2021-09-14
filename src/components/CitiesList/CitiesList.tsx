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