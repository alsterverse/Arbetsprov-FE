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

    return(
        <Card color={cardColor}>
            <div className={classes.Container}>
                <div className={classes.Column}>
                    <Icon type={props.weatherDesc} />
                </div>
                <div className={classes.Column}>
                    <p>{props.name}</p>
                    <p>{props.weatherDesc}</p>
                    <p>{props.temperature}</p>
                </div>
            </div>
        </Card>
    )
}

export default CityCard;