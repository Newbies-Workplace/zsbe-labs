import styles from "./Input.module.css"

export function Input({value, setValue, type, placeholder}) {
    return (
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type={type}
            placeholder={placeholder}
            className={styles.input}/>
    )
}