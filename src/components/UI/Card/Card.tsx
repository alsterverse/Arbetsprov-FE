
import classes from './Card.module.css';

type Props = {
    children: JSX.Element | JSX.Element[],
    color?: string,
}

const Card: React.FC<Props> = ({children, color}: Props) => {
    let classList:string[] = [classes.Card];

    switch(color) {
        case "Blue":
            classList.push(classes.Blue);
            break;

        case "Yellow":
            classList.push(classes.Yellow);
            break;

        case "Red":
            classList.push(classes.Red);
            break;

        default:
            break;
    }

    return(
        <div className={classList.join(' ')}>
            {children}
        </div>
    )
}

export default Card;