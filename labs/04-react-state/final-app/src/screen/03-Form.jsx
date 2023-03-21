import {Input} from "../components/Input/Input.jsx";
import styles from "./../App.module.css"
import {Button} from "../components/Button/Button.jsx";
import {useState} from "react";

export function Form() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const onLoginClick = () => {
        console.log({
            login: login,
            password: password
        })
    }

    return (
        <div className={styles.container}>
            <Input
                value={login}
                setValue={setLogin}
                placeholder={'login'}/>
            <Input
                value={password}
                setValue={setPassword}
                placeholder={'hasło'}
                type={'password'}/>

            <Button onClick={onLoginClick}>
                Zaloguj
            </Button>
        </div>
    )
}