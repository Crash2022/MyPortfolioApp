import React, {useState} from 'react'
import style from './MainBlock3.module.scss'
import {v1} from 'uuid'
import {ProjectsList} from './ProjectsList'
import {Title} from '../../../common/components/Title'
import projectSocial from '../../../assets/images/projects/project_social5.jpg'
import projectCards from '../../../assets/images/projects/project_cards1.jpg'
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
            text: 'Данный проект написан на классовых компонентах. Стэк технологий: React, Typescript, React Redux, Redux Form, TDD',
            link: 'https://Crash2022.github.io/IT-Samurai-Social'
        },
        {
            id: v1(),
            style: {backgroundImage: `url(${projectCards})`},
            title: 'Карточки',
            text: 'Приложение, с помощью которого можно обучаться по принципу "вопрос-ответ". ' +
                'Стэк технологий: React, Typescript, React Redux, Formik, Material UI, TDD. Проект разрабатывался в команде из 3-х человек',
            link: 'https://onemore8762.github.io/cards'
        },
        {
            id: v1(), style: {backgroundImage: `url(${projectPortfolio})`}, title: 'Портфолио',
            text: 'Сайт-портфолио, написанный с помощью React-библиотеки с использованием препроцессора SCSS',
            link: 'https://Crash2022.github.io/MyPortfolioApp'
        },
        {
            id: v1(), style: {backgroundImage: `url(${projectTodolist})`}, title: 'Тудулист',
            text: 'Проект написан на React с использованием функциональных компонент. ' +
                'Дизайн разработан с помощью библиотеки Material UI. ' +
                'Стэк технологий: React, Typescript, Redux Toolkit, Formik, Material UI, Storybook, TDD',
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
