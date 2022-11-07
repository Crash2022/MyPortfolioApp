import React from 'react'
import style from './MainBlock3.module.css'

type ProjectItemPropsType = {
    title: string
    text: string
}

export const Project_Item: React.FC<ProjectItemPropsType> = ({title, text}) => {

    return (
        <>
            <div className={style.item_image}>
                <a href="#">Посмотреть</a>
            </div>
            <div className={style.item_title}><h3>{title}</h3></div>
            <div className={style.item_description}>{text}</div>
        </>
    );
}
