import React from 'react'
//import style from './MainBlock2.module.css'
import style from './MainBlock2.module.scss'

type SkillItemPropsType = {
    icon: string
    title: string
    text: string
}

export const Skill_Item: React.FC<SkillItemPropsType> = ({icon, title, text}) => {

    return (
        <>
            <div className={style.item_icon}>
                <img src={icon} alt="skill_logo"/>
            </div>
            <div className={style.item_title}>
                <h3>{title}</h3>
            </div>
            <div className={style.item_text}>
                {text}
            </div>
        </>
    );
}