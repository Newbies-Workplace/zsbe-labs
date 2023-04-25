import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <div>
            <h1>Not Found Page</h1>

            <img src={'404.jpg'}/>

            <br/>
            <Link to={'/'}>
                Go home
            </Link>
        </div>
    )
}