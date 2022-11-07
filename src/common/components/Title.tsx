import React from 'react'
// import style from '../styles/CommonStyles.module.css'
import style from '../styles/CommonStyles.module.scss'

export type TitleType = {
    title: string
}

export const Title: React.FC<TitleType> = ({title}) => {

    return (
        <div className={style.common_title}>
            <h2>{title}</h2>
        </div>
    );
}
