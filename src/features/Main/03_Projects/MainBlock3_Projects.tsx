import React, {useState} from 'react'
import s from './MainBlock3.module.scss'
import {v1} from 'uuid'
import {ProjectsList} from './ProjectsList'
import {Title} from '../../../shared/ui/Title/Title'
import projectCards from '../../../shared/assets/images/projects/project_cards1.jpg'
import projectSocial from '../../../shared/assets/images/projects/project_social5.jpg'
import projectInctagram from '../../../shared/assets/images/projects/project_inctagram.jpg'
import projectBikeshop from '../../../shared/assets/images/projects/project_bikeshop.jpg'
import projectPortfolio from '../../../shared/assets/images/projects/project_portfolio3.jpg'
import projectTodolist from '../../../shared/assets/images/projects/project_todolist3.jpg'
import {Slide} from "react-awesome-reveal"
import {useTranslation} from 'react-i18next'

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

    const {t} = useTranslation('main-projects')

    const [projects, setProjects] = useState<Array<ProjectsArrayPropsType>>([
        {
            id: v1(),
            style: {backgroundImage: `url(${projectCards})`},
            title: t('EducationCards'),
            text: t('EducationCards_Desc'),
            link: 'https://education-cards.vercel.app'
        },
        {
            id: v1(),
            style: {backgroundImage: `url(${projectSocial})`},
            title: t('SocialNetwork'),
            text: t('SocialNetwork_Desc'),
            link: 'https://Crash2022.github.io/IT-Samurai-Social'
        },
        {
            id: v1(),
            style: {backgroundImage: `url(${projectInctagram})`},
            title: t('Inctagram'),
            text: t('Inctagram_Desc'),
            link: 'https://github.com/Crash2022/Inctagram'
        },
        {
            id: v1(),
            style: {backgroundImage: `url(${projectBikeshop})`},
            title: t('BikeShop'),
            text: t('BikeShop_Desc'),
            link: 'https://bike-shop-rho.vercel.app'
        },
        {
            id: v1(),
            style: {backgroundImage: `url(${projectPortfolio})`},
            title: t('Portfolio'),
            text: t('Portfolio_Desc'),
            link: 'https://my-portfolio-app-beryl.vercel.app'
        },
        {
            id: v1(),
            style: {backgroundImage: `url(${projectTodolist})`},
            title: t('Todolist'),
            text: t('Todolist_Desc'),
            link: 'https://Crash2022.github.io/Samurai-TodoList'
            // link: 'https://samuraitodo.herokuapp.com'
        }
    ]);

    return (
        <div className={s.mainBlock3} id='projects'>
            <Slide direction={'left'}>
                <Title title={t('T_Projects')}/>
                <div className={s.mainBlock3_projects}>
                    <ProjectsList projects={projects}/>
                </div>
            </Slide>
        </div>
    )
}
