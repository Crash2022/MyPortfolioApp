import React from 'react'
import styles from "../styles/CommonStyles.module.scss";

export const TopButton = () => {

    return (
        <button className={styles.topBtn}>
            <a href="#main">
                Наверх
            </a>
        </button>
    );
}