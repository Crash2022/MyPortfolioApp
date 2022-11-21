import React from 'react'
import styles from "./TopButton.module.scss";

export const TopButton = () => {

    return (
        <button className={styles.topBtn}>
            <a href="#main">
                Наверх
            </a>
        </button>
    );
}