import React from "react";
import styles from "./Input.module.css"

export function Input({value, setValue, placeholder, type}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className={styles.input}/>
    )
}