import {Button} from "../Button/Button.jsx";
import {useState} from "react";
import styles from "./Counter.module.css";

export function Counter() {
    const [count, setCount] = useState(0)

    const onPlusClicked = () => {
        setCount((c) => c + 1)
    }

    const onMinusClicked = () => {
        setCount((c) => c - 1)
    }

    return (
        <div className={styles.container}>
            <Button onClick={onPlusClicked}>
                +
            </Button>

            <h2>
                {count}
            </h2>

            <Button onClick={onMinusClicked}>
                -
            </Button>
        </div>
    )
}