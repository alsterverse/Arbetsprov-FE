import Button from "../Button/Button";

import Classes from "./Input.module.css";

const Input = () => {

    return (
        <div className={Classes.Container}>
            <span className={Classes.Label}>Plats:</span>
            <input className={Classes.Input} placeholder="skriv en stad här..." />
            <Button type="add" />
        </div>
    )
}

export default Input;