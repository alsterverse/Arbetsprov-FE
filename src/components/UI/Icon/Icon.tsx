import sunny from "./../../../assets/icon_sun.svg";
import cloudy from "./../../../assets/icon_cloudy.svg";
import rainy from "./../../../assets/icon_rain.svg";
import fallback from "./../../../assets/CloseButton.svg";

import classes from './Icon.module.css';

interface Props {
    type: string;
    size?: string;
}

const Icon: React.FC<Props> = (props) => {
    let icon: string;
    let iconAltText: string;
    let style: string;

    switch(props.size) {
        case "small":
            style = classes.sm;
            break;

        case "medium":
            style = classes.md;
            break;

        case "large":
            style = classes.lg;
            break;

        default:
            style = classes.lg;
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

        default:
            icon = fallback;
            iconAltText = "fallback icon";
    }

    return(
        <div className={style}>
            <img src={icon} alt={iconAltText} />
        </div>
    )
}

export default Icon;