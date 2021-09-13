
import classes from './Card.module.css';

type Props = {
    children: JSX.Element | JSX.Element[],
    color?: string,
}

const Card = ({children, color}: Props) => {
    let classList:string[] = [classes.Card]

    if(color == "green") {
        classList.push(classes.Green);
    } else if (color == "red") {
        classList.push(classes.Red);
    }

    return(
        <div className={classList.join(' ')}>
            {children}
        </div>
    )
}

export default Card;