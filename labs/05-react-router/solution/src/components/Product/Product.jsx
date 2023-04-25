import React from 'react';
import styles from './Product.module.css';

export function Product({name, price}) {
    return (
        <div className={styles.product}>
            <h1>{name}</h1>
            <h2>{price} zl</h2>
        </div>
    )
}