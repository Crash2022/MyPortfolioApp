import React, {useState} from 'react'
// import style from './MainBlock3.module.css'
import style from './MainBlock3.module.scss'
// import s from '../00_Main/Main.module.css'
import {v1} from 'uuid'
import {ProjectsList} from './ProjectsList'
import {Title} from '../../../common/components/Title'
import projectSocial from '../../../assets/images/projects/project_social2.jpg'
import projectFriday from '../../../assets/images/projects/project_friday3.jpg'
import projectPortfolio from '../../../assets/images/projects/project_portfolio3.jpg'
import projectTodolist from '../../../assets/images/projects/project_todolist3.jpg'
import {Slide} from "react-awesome-reveal";

export type ProjectsArrayPropsType = {
    id: string
    style: StyleType
    title: string
    text: string
    link: string
}

export type StyleType = {
    [key: string]: string | number
}

export const MainBlock3_Projects = () => {

    const [projects, setProjects] = useState<Array<ProjectsArrayPropsType>>([
        {
            id: v1(), style: {backgroundImage: `url(${projectSocial})`}, title: 'Социальная сеть',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            link: 'https://Crash2022.github.io/IT-Samurai-Social'
        },
        {
            id: v1(),
            style: {backgroundImage: `url(${projectFriday})`},
            title: 'Пятничный проект',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            link: 'https://Crash2022.github.io/FridayProject'
        },
        {
            id: v1(), style: {backgroundImage: `url(${projectPortfolio})`}, title: 'Портфолио',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ' +
                'culpa deserunt dolorem doloremque dolores ducimus eaque eos ex harum',
            link: 'https://Crash2022.github.io/MyPortfolioApp'
        },
        {
            id: v1(), style: {backgroundImage: `url(${projectTodolist})`}, title: 'Тудулист',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt ' +
                'dolorem doloremque dolores ducimus eaque eos ex harum minus neque non optio porro possimus ' +
                'qui recusandae repellat voluptate voluptatem?',
            link: 'https://samuraitodo.herokuapp.com'
        }
    ]);

    return (
        <div className={style.mainBlock3} id='projects'>
            <Slide direction={'left'}>
                {/*<div className={s.container}>*/}

                <Title title={'Мои проекты'}/>

                <div className={style.mainBlock3_projects}>
                    <ProjectsList projects={projects}/>
                </div>
                {/*</div>*/}
            </Slide>
        </div>
    );
}
