import classes from './Grid.module.css';

type Props = {
    children: JSX.Element | JSX.Element[],
}

const Grid = ({children}: Props) => {
    return(
        <div className={classes.Container}>
            {children}
        </div>
    )
}

export default Grid;