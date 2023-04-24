import React, {useState} from "react";
import {Button} from "../components/Button/Button.jsx";

export function Variable() {
    const [count, setCount] = useState(0)

    function onPlusPress() {
        setCount((prevCount) => prevCount + 1)
    }

    function onMinusPress() {
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <div>
            <Button onClick={() => onPlusPress()}>
                +
            </Button>
            <h1>{count}</h1>
            <Button onClick={() => onMinusPress()}>
                -
            </Button>
        </div>
    )
}