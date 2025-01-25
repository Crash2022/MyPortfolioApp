import React, {useEffect, useState} from 'react'
import s from './MainBlock3.module.scss'
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
            id: '1',
            style: {backgroundImage: `url(${projectBikeshop})`},
            title: 'BikeShop',
            text: 'BikeShop_Desc',
            link: 'https://bike-shop-rho.vercel.app'
        },
        {
            id: '2',
            style: {backgroundImage: `url(${projectCards})`},
            title: 'EducationCards',
            text: 'EducationCards_Desc',
            link: 'https://education-cards.vercel.app'
        },
        {
            id: '3',
            style: {backgroundImage: `url(${projectInctagram})`},
            title: 'Inctagram',
            text: 'Inctagram_Desc',
            link: 'https://inctagram-grammeri.vercel.app'
        },

        {
            id: '4',
            style: {backgroundImage: `url(${projectSocial})`},
            title: 'SocialNetwork',
            text: 'SocialNetwork_Desc',
            link: 'https://Crash2022.github.io/IT-Samurai-Social'
        },
        {
            id: '5',
            style: {backgroundImage: `url(${projectPortfolio})`},
            title: 'Portfolio',
            text: 'Portfolio_Desc',
            link: 'https://my-portfolio-app-beryl.vercel.app'
        },
        {
            id: '6',
            style: {backgroundImage: `url(${projectTodolist})`},
            title: 'Todolist',
            text: 'Todolist_Desc',
            link: 'https://Crash2022.github.io/Samurai-TodoList'
            // link: 'https://samuraitodo.herokuapp.com'
        }
    ])

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
