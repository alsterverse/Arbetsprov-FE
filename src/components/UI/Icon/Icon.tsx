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

        default:
            icon = fallback;
            iconAltText = "fallback icon";
    }

    return(
        <div className={classes.lg}>
            <img src={icon} alt={iconAltText} />
        </div>
    )
}

export default Icon;