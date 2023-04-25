import React from 'react';
import styles from './ProductList.module.css';
import {Product} from "../../components/Product/Product.jsx";
import {Link} from "react-router-dom";

export const ProductListPage = () => {
    return (
        <div>
            <h1>Product List Page</h1>

            <div className={styles.products}>
                <a href={'/product/orange'}>
                    <Product name={'orange'} price={3.5}/>
                </a>

                <Link to={'/product/apple'}>
                    <Product name={'apple'} price={2.5}/>
                </Link>

                <Link to={'/product/banana'}>
                    <Product name={'banana'} price={4.5}/>
                </Link>
            </div>
        </div>
    )
}