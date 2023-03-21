import {Button} from "../components/Button/Button.jsx";
import {useState} from "react";
import style from "./../App.module.css"

export function State() {
    const [buttonPressed, setButtonPressed] = useState(false)

    const onButtonClicked = () => {
        setButtonPressed(true)
    }

    return (
        <div className={style.container}>
            <h1>
                Czy przycisk wciśnięto?
            </h1>

            {buttonPressed &&
                <span>
                    tak
                </span>
            }
            {!buttonPressed &&
                <span>
                    nie
                </span>
            }

            <Button onClick={() => onButtonClicked()}>
                Test
            </Button>
        </div>

    )
}