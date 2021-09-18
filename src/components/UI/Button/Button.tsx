
import Icon from "./../Icon/Icon";
import Classes from "./Button.module.css";



type Props = {
    type: string,
    children?: JSX.Element | JSX.Element[],
    click(): any
}

const Button = ({type, children, click}: Props) => {
    let styles: string[] = [];
    let content: JSX.Element;

    switch(type) {
        case "close":
            content = <Icon type="close" size="small" />;
            styles.push(Classes.IconButton)
            break;

        case "add":
            content = <Icon type="add" size="small" />;
            styles.push(Classes.IconButton);
            break;

        default:
            content = <>{children}</>
    }

    return(
        // Klumpigt sätt att styra html-button-type här. Skyller på TS!
        <button type={type === "add" ? "submit" : "button"} className={styles.join(' ')} onClick={click}>
            {content}
        </button>    
    )
}

export default Button;