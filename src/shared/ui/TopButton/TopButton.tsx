import React from 'react'
import styles from "./TopButton.module.scss"
import ArrowUp from '../../assets/icons/decor/arrow-up.svg'

export const TopButton = () => {

    return (
            <a href="#main" className={styles.topBtn}>
                {/*top*/}
                <img src={ArrowUp} alt='arrow-up' width={20} height={20}/>
            </a>
    )
}