import React from "react";
import {useParams} from "react-router-dom";

export const ProductPage = () => {
    const {name} = useParams();


    return (
        <div>
            <h1>Product Page {name}</h1>

            To jest strona produktu {name}
        </div>
    )
}