import React from 'react'
import styles from './MainBlock3.module.scss'
import {StyleType} from "./MainBlock3_Projects";

type ProjectItemPropsType = {
    title: string
    text: string
    style: StyleType
    link: string
}

export const Project_Item: React.FC<ProjectItemPropsType> = ({title, text, style, link}) => {

    return (
        <>
            <div className={styles.item_image} style={style}>
                <a className={styles.item_button} href={link}>Посмотреть</a>
            </div>
            <div className={styles.item_title}><h3>{title}</h3></div>
            <div className={styles.item_description}>{text}</div>
        </>
    );
}