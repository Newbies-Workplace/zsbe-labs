import React, {useEffect, useState} from "react";
import {Input} from "../components/Input/Input.jsx";
import {Button} from "../components/Button/Button.jsx";
import styles from "./Form.module.css"

export function Form() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function onLoginClick() {
        console.log({
            login: login,
            password: password
        })
    }

    return (
        <div className={styles.container}>
            <Input
                placeholder={'login'}
                value={login}
                setValue={setLogin}/>
            <Input
                placeholder={'hasło'}
                value={password}
                setValue={setPassword}
                type={'password'}/>

            <Button onClick={onLoginClick}>
                Zaloguj
            </Button>
        </div>
    )
}