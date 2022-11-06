import React, {useState} from 'react'
import style from '../Main/MainBlock3.module.css'
import {v1} from 'uuid';
import {ProjectsList} from './ProjectsList';

export type ProjectsArrayPropsType = {
    id: string
    image: string
    title: string
    text: string
}

export const MainBlock3_Projects = () => {

    const [projects, setProjects] = useState<Array<ProjectsArrayPropsType>>([
        {
            id: v1(), image: 'ICON', title: 'Social Network',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: v1(), image: 'ICON', title: 'Friday Project',
            text: 'Can make projects on Angular'
        },
        {
            id: v1(), image: 'ICON', title: 'Portfolio App',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ' +
                'culpa deserunt dolorem doloremque dolores ducimus eaque eos ex harum.'
        },
        {id: v1(), image: 'ICON', title: 'Todolist',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt ' +
                'dolorem doloremque dolores ducimus eaque eos ex harum minus neque non optio porro possimus ' +
                'qui recusandae repellat voluptate voluptatem?'
        },/*
        {id: v1(), image: 'ICON', title: 'JavaScript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {id: v1(), image: 'ICON', title: 'JavaScript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt' +
                ' dolorem doloremque dolores ducimus.'
        }*/
    ]);

    return (
        <div className={style.mainBlock3} id='projects'>
            <div className={style.mainBlock3_title}>
                <h2>Мои проекты</h2>
            </div>
            <div className={style.mainBlock3_projects}>
                <ProjectsList projects={projects}/>
            </div>
        </div>
    );
}
