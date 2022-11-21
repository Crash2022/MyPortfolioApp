import React from 'react'
import styles from "./TopButton.module.scss";

export const TopButton = () => {

    return (
        // <button className={styles.topBtn}>
            <a href="#main" className={styles.topBtn}>
                Наверх
            </a>
        // </button>
    );
}