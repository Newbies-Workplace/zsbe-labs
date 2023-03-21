import styles from "./App.module.css"
import {State} from "./screen/02-State.jsx";
import {Variable} from "./screen/01-Variable.jsx";
import {Form} from "./screen/03-Form.jsx";
import {Container} from "./components/Container/Container.jsx";
import {Counter} from "./components/Counter/Counter.jsx";

function App() {

    return (
        <div className={styles.container}>
            <Container>
                {/*test*/}
                {/*<Variable/>*/}
                {/*<State/>*/}
                {/*<Counter/>*/}
                <Form/>
            </Container>
        </div>
    )
}

export default App
