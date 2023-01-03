import React from 'react'
import {v1} from "uuid"
import style from './MainBlock3.module.scss'
import {ProjectsArrayPropsType} from './MainBlock3_Projects';
import {Project_Item} from './Project_Item';

type ProjectsListPropsType = { projects: Array<ProjectsArrayPropsType> }

export const ProjectsList = (props: ProjectsListPropsType) => {

    return (
        <>
            {
                props.projects.map(el => {
                    return (
                        <div key={v1()} className={style.mainBlock3_projectItem}>
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
    );
}
