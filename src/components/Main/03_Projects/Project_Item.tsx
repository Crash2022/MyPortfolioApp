import React from 'react'
import styles from './MainBlock3.module.css'
import {StyleType} from "./MainBlock3_Projects";

type ProjectItemPropsType = {
    title: string
    text: string
    style: StyleType
}

export const Project_Item: React.FC<ProjectItemPropsType> = ({title, text, style}) => {

    return (
        <>
            <div className={styles.item_image} style={style}>
                <a href="#">Посмотреть</a>
            </div>
            <div className={styles.item_title}><h3>{title}</h3></div>
            <div className={styles.item_description}>{text}</div>
        </>
    );
}