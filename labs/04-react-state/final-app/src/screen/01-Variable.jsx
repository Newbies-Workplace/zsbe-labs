import {Button} from "../components/Button/Button.jsx";
import style from "./../App.module.css"

export function Variable() {
    let buttonPressed = false

    const onButtonClicked = () => {
        buttonPressed = true
    }

    return (
        <div className={style.container}>
            <span>
                Czy przycisk wciśnięto?
            </span>

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