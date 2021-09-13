import CitiesList from "../../components/CitiesList/CitiesList";
import { useState } from "react";

interface State {
    cities: {
        id: number,
        name: string,
        temperature: number,
        weather: string
    }[] 
}

const Dashboard = () => {

    const [cities, setCities] = useState<State["cities"]>([
        { id: 123, name: "Stockholm", temperature: 14, weather: "sunny"},
        { id: 456, name: "Copenhagen", temperature: 15, weather: "rainy"}
    ]);

    return(
        <>
            <div>This is dashboard</div>
            <CitiesList cities={cities} />
        </>
    )
}

export default Dashboard;
