
import Icon from "./../Icon/Icon";
import Classes from "./Button.module.css";

type Props = {
    type: string,
    children?: JSX.Element | JSX.Element[],
    click(): any
}

const Button = ({type, children, click}: Props) => {
    let style: string[] = [];
    let content: JSX.Element;

    switch(type) {
        case "close":
            content = <Icon type="close" size="small" />;
            style.push(Classes.IconButton)
            break;

        case "add":
            content = <Icon type="add" size="small" />;
            style.push(Classes.IconButton);
            break;

        default:
            content = <>{children}</>
    }

    return(
        <button className={style.join(' ')} onClick={click}>
            {content}
        </button>    
    )
}

export default Button;