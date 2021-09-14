import Card from '../UI/Card/Card';
interface Props {
    id: number;
    name: string;
    temperature: number;
    weather: string;
}

const CityCard: React.FC<Props> = (props) => {
    let cardColor: string;

    if(props.temperature <= 14) {
        cardColor = "green";
    } else {
        cardColor ="red";
    }

    return(
        <Card color={cardColor}>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.weather}</p>
            <p>{props.temperature}</p>
        </Card>
    )
}

export default CityCard;