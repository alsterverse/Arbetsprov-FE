import Card from '../UI/Card/Card';
import Icon from '../UI/Icon/Icon';
import Button from "./../UI/Button/Button";

import classes from './CityCard.module.css';

const CityCard = (props: any) => {
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
                <div className={[classes.Column, classes.ColumnLeft].join(" ")}>
                    <Icon type={props.weatherDesc} />
                </div>
                <div className={[classes.Column, classes.ColumnRight].join(" ")}>
                    <div className={classes.CloseBtn}>
                        <Button type="close" click={() => props.remove(props.id)}></Button>
                    </div>
                    <div className={classes.Info}>
                        <span className={classes.Temperature}>{props.temperature} &#176;</span>
                        <p className={classes.Location}>{props.name}</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default CityCard;