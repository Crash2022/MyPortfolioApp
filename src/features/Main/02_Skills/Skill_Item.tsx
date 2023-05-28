import React from 'react'
import s from './MainBlock2.module.scss'
import {Fade} from "react-awesome-reveal"

type SkillItemPropsType = {
    icon: string
    title: string
    text: string
}

export const Skill_Item: React.FC<SkillItemPropsType> = ({icon, title, text}) => {

    return (
        <Fade>
            <div className={s.item_icon}>
                <img src={icon} alt="skill_logo"/>
            </div>
            <div className={s.item_title}>
                <h3>{title}</h3>
            </div>
            <div className={s.item_text}>
                {text}
            </div>
        </Fade>
    )
}
