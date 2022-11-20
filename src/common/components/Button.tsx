import React from 'react'
import style from './Button.module.scss'

type ButtonType = {
    title: string
}

export const Button: React.FC<ButtonType> = ({title}) => {

    return (
        <div className={style.sendButton}>
            <button>{title}</button>
        </div>
    );
}
