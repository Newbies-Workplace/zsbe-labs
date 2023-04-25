import React from "react";
import {Link, useNavigate} from "react-router-dom";

export function HomePage() {
    const navigate = useNavigate();

    const onButtonClick = () => {
        setTimeout(() => {
            navigate('/about')
        }, 2000);
    }

    return (
        <div>
            <h1>Home Page</h1>

            <Link to={'/about'}>
                About
            </Link>

            <br/>

            <Link to={'/test'}>
                Test (not found)
            </Link>

            <br/>

            <Link to={'/products'}>
                Product list
            </Link>

            <br/>

            <Link to={'/event'}>
                Event
            </Link>

            <br/>

            <button onClick={onButtonClick}>
                Przenieś po czasie
            </button>
        </div>
    )
}