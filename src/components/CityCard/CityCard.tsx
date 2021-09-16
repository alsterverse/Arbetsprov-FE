import Card from '../UI/Card/Card';
import Icon from '../UI/Icon/Icon';
import { CityData } from './../../interfaces';

import classes from './CityCard.module.css';

const CityCard: React.FC<CityData> = (props) => {
    let cardColor: string;

    // Decide color on card
    if(props.temperature >= 20) {
        cardColor = "Red";
    } else if (props.temperature > 0) {
        cardColor = "Yellow";
    } else {
        cardColor = "Blue";
    }

    // Special case
    if(props.weatherDesc === "rainy") {
        cardColor = "Blue";
    }

    return(
        <Card color={cardColor}>
            <div className={classes.Container}>
                <div className={classes.Column}>
                    <Icon type={props.weatherDesc} />
                </div>
                <div className={classes.Column}>
                    <p>{props.temperature} &#176;</p>
                    <p>{props.name}</p>
                </div>
            </div>
        </Card>
    )
}

export default CityCard;