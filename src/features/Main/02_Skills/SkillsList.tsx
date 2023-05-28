import React from 'react'
import s from './MainBlock2.module.scss'
import {v1} from "uuid"
import {SkillsArrayPropsType} from './MainBlock2_Skills'
import {Skill_Item} from "./Skill_Item"

export type SkillsListPropsType = { skills: Array<SkillsArrayPropsType> }

export const SkillsList = (props: SkillsListPropsType) => {

    return (
        <>
            {
                props.skills.map(el => {
                    return (
                        <div key={v1()} className={s.mainBlock2_skillItem_column}>
                            <div className={s.mainBlock2_skillItem}>
                                <Skill_Item icon={el.icon} title={el.title} text={el.text}/>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}
