import React from 'react'
import style from './Button.module.scss'

type ButtonType = {
    title: string
    onClick: () => void
}

export const Button: React.FC<ButtonType> = ({title, onClick}) => {

    return (
        <div className={style.sendButton}>
            <button onClick={()=>{onClick()}}>{title}</button>
        </div>
    );
}
