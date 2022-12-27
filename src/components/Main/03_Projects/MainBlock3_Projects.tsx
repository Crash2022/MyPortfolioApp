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
            text: 'Данный проект написан на классовых компонентах. Стэк технологий: React, React Redux, Redux Form, TDD',
            link: 'https://Crash2022.github.io/IT-Samurai-Social'
        },
        {
            id: v1(),
            style: {backgroundImage: `url(${projectFriday})`},
            title: 'Карточки',
            text: 'Приложение, с помощью которого можно обучаться по принципу "вопрос-ответ". ' +
                'Стэк технологий: React, React Redux, Formik, Material UI, TDD. Проект разрабатывался в команде из 3-х человек',
            link: 'https://onemore8762.github.io/cards'
        },
        {
            id: v1(), style: {backgroundImage: `url(${projectPortfolio})`}, title: 'Портфолио',
            text: 'Сайт-портфолио, написанный с помощью React-библиотеки с использованием препроцессора SCSS',
            link: 'https://Crash2022.github.io/MyPortfolioApp'
        },
        {
            id: v1(), style: {backgroundImage: `url(${projectTodolist})`}, title: 'Тудулист',
            text: 'Проект написан на React с использованием функциональных компонент. Дизайн разработан с помощью библиотеки Material UI',
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
