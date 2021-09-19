import Button from "../Button/Button";

import Classes from "./Input.module.css";

interface Props {
    value: string,
    change: any,
    error: Boolean,
    errorMessage: string,
    onsubmit: any
}

const Input: React.FC<Props> = ({value, change, error, errorMessage, onsubmit}) => {

    return (
        <>
            <div className={Classes.Container}>
                <form className={Classes.Form} onSubmit={onsubmit}>
                    <div className={Classes.FormLeft}>
                        <span className={Classes.Label}>Plats:</span>
                        <input
                            value={value} 
                            className={Classes.Input} 
                            placeholder="skriv en stad här..."
                            onChange={((evt: any) => change(evt))} />
                    </div>
                    <div className={Classes.AddButton}>
                        <Button type="add" click={onsubmit} />
                    </div>
                </form>
            </div>

            {error && 
                <div className={Classes.ErrorContainer}>
                    <span>{errorMessage}</span>
                </div>}
        </>
    )
}

export default Input;