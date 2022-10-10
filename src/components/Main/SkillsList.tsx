import React from 'react'
import {v1} from "uuid"
import {SkillsArrayPropsType} from './MainBlock2_Skills'
import style from '../Main/MainBlock2.module.css'

export type SkillsListPropsType = { skills: Array<SkillsArrayPropsType> }

export const SkillsList = (props: SkillsListPropsType) => {

    return (
        <>
            {
                props.skills.map(el => {
                    return (
                        <div key={v1()} className={style.mainBlock2_item}>
                            <div className={style.item_icon}>{el.icon}</div>
                            <div className={style.item_title}>{el.title}</div>
                            <div className={style.item_text}>{el.text}</div>
                        </div>
                    )
                })
            }
        </>
    );
}
