import sunny from "./../../../assets/icon_sun.svg";
import cloudy from "./../../../assets/icon_cloudy.svg";
import rainy from "./../../../assets/icon_rain.svg";
import fallback from "./../../../assets/CloseButton.svg";
import add from "./../../../assets/AddButton.svg";

import classes from './Icon.module.css';

interface Props {
    type: string;
    size?: string;
}

const Icon: React.FC<Props> = (props) => {
    let icon: string;
    let iconAltText: string;
    let styles: string[] = [];

    switch(props.size) {
        case "small":
            styles.push(classes.sm);
            break;

        case "medium":
            styles.push(classes.md);
            break;

        case "large":
            styles.push(classes.lg);
            break;

        default:
            styles.push(classes.lg);
    }
    
    switch(props.type) {
        case "sunny":
            icon = sunny;
            iconAltText = "sunny icon";
            break; 

        case "cloudy":
            icon = cloudy;
            iconAltText = "cloudy icon";
            break; 

        case "rainy":
            icon = rainy;
            iconAltText = "rainy icon";
            break;

        case "close":
            icon = fallback;
            iconAltText = "fallback icon";
            break;

        case "add":
            icon = add;
            iconAltText = "add icon";
            styles.push(classes.black);
            break;

        default:
            icon = fallback;
            iconAltText = "fallback icon";
    }

    return(
        <div className={styles.join(" ")}>
            <img src={icon} alt={iconAltText} />
        </div>
    )
}

export default Icon;