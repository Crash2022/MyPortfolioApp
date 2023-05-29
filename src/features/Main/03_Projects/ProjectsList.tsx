import React from 'react'
import {v1} from "uuid"
import s from './MainBlock3.module.scss'
import {ProjectsArrayPropsType} from './MainBlock3_Projects'
import {Project_Item} from './Project_Item'
import {useTranslation} from 'react-i18next'

type ProjectsListPropsType = { projects: Array<ProjectsArrayPropsType> }

export const ProjectsList = (props: ProjectsListPropsType) => {

    const {t} = useTranslation('main-projects')

    return (
        <>
            {
                props.projects.map(el => {
                    return (
                        <div key={v1()} className={s.mainBlock3_projectItem}>
                            <Project_Item title={el.title}
                                          text={el.text}
                                          style={el.style}
                                          link={el.link}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}
