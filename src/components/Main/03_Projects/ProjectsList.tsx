import React from 'react'
import {v1} from "uuid"
import style from './MainBlock3.module.css'
import {ProjectsArrayPropsType} from "./MainBlock3_Projects";

export type ProjectsListPropsType = { projects: Array<ProjectsArrayPropsType> }

export const ProjectsList = (props: ProjectsListPropsType) => {

    return (
        <>
            {
                props.projects.map(el => {
                    return (
                        <div key={v1()} className={style.mainBlock3_projectItem}>
                            <div className={style.item_image}>
                                <a href="#">Посмотреть</a>
                            </div>
                            <div className={style.item_title}><h3>{el.title}</h3></div>
                            <div className={style.item_description}>{el.text}</div>
                        </div>
                    )
                })
            }
        </>
    );
}
