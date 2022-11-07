import React, {useState} from 'react'
import style from './MainBlock3.module.css'
import {v1} from 'uuid'
import {ProjectsList} from './ProjectsList'
import {Title} from '../../../common/components/Title'
import projectSocial from '../../../assets/images/project_social.jpg'

export type ProjectsArrayPropsType = {
    id: string
    style: StyleType
    title: string
    text: string
}

export type StyleType = {
    [key: string]: string | number
}

export const MainBlock3_Projects = () => {

    const [projects, setProjects] = useState<Array<ProjectsArrayPropsType>>([
        {
            id: v1(), style: {backgroundImage: `url(${projectSocial})`}, title: 'Social Network',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: v1(), style: {backgroundImage: `url(${projectSocial})`}, title: 'Friday Project',
            text: 'Can make projects on Angular'
        },
        {
            id: v1(), style: {backgroundImage: `url(${projectSocial})`}, title: 'Portfolio App',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ' +
                'culpa deserunt dolorem doloremque dolores ducimus eaque eos ex harum.'
        },
        {id: v1(), style: {backgroundImage: `url(${projectSocial})`}, title: 'Todolist',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt ' +
                'dolorem doloremque dolores ducimus eaque eos ex harum minus neque non optio porro possimus ' +
                'qui recusandae repellat voluptate voluptatem?'
        }
    ]);

    return (
        <div className={style.mainBlock3} id='projects'>
            {/*<div className={style.mainBlock3_title}>*/}
            {/*    <h2>Мои проекты</h2>*/}
            {/*</div>*/}
            <Title title={'Мои проекты'}/>
            <div className={style.mainBlock3_projects}>
                <ProjectsList projects={projects}/>
            </div>
        </div>
    );
}
