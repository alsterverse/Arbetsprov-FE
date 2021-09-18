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
                <form onSubmit={onsubmit}>
                    <span className={Classes.Label}>Plats:</span>
                    <input
                        value={value} 
                        className={Classes.Input} 
                        placeholder="skriv en stad här..."
                        onChange={((evt: any) => change(evt))} />
                    <Button type="add" click={onsubmit} />
                </form>
            </div>
            <div>
                {error ?? 
                <div className={Classes.ErrorContainer}>
                    {errorMessage}
                </div> 
            }
            </div>
        </>
    )
}

export default Input;