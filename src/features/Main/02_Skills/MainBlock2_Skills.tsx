import React, {useState} from 'react'
import s from '../00_Main/Main.module.css'
import style from './MainBlock2.module.scss'
import {v1} from 'uuid'
import {SkillsList} from './SkillsList'
import {Title} from '../../../common/components/Title/Title'
import ReactLogo from '../../../assets/icons/skills/react_02.svg'
import ReactRedux from '../../../assets/icons/skills/redux-logo_01.svg'
import ReduxToolkit from '../../../assets/icons/skills/ReduxToolkit_01.svg'
import Typescript from '../../../assets/icons/skills/typescript_02.svg'
import Angular from '../../../assets/icons/skills/angular.svg'
import Storybook from '../../../assets/icons/skills/storybook_02.svg'
import RestAPI from '../../../assets/icons/skills/RestAPI_01.png'
import NextJS from '../../../assets/icons/skills/next-js_01.svg'
import Gatsby from '../../../assets/icons/skills/gatsby_02.svg'
import Jest from '../../../assets/icons/skills/jest.svg'
import Git from '../../../assets/icons/skills/git_02.svg'
import Material from '../../../assets/icons/skills/material-ui.svg'

export type SkillsArrayPropsType = {
    id: string
    icon: string
    title: string
    text: string
}

export const MainBlock2_Skills = () => {

    // ru
    /*const [skills, setSkills] = useState<Array<SkillsArrayPropsType>>([
        {
            id: v1(), icon: ReactLogo, title: 'React JS',
            text: 'На сегодняшний день React является одной из самых популярных и ' +
                'эффективных библиотек для создания веб-приложений'
        },
        /!*{
            id: v1(), icon: ReactRedux, title: 'React Redux/Redux Toolkit',
            text: 'Ни один крупный проект невозможно разрабатывать без стейт-менеджера, ' +
                'таких как React-Redux или Redux Toolkit, ' +
                'которые соответствуют FLUX-архитектуре'
        },*!/
        {
            id: v1(), icon: ReactRedux, title: 'React Redux',
            text: 'Использование библиотеки React-Redux способствует тому, чтобы разрабатываемое приложение соответствовало FLUX-архитектуре'
        },
        {
            id: v1(), icon: ReduxToolkit, title: 'Redux Toolkit',
            text: 'Redux Toolkit является усовершенствованной версией React-Redux и делает разработку приложения более удобной'
        },
        /!*{
            id: v1(), icon: ReactNative, title: 'React Native',
            text: 'Сегодня более 70% информации просматривается с помощью мобильных приложений ' +
                'и поэтому знание технологий для разработки приложений для мобильных устройств является обязательным'
        },*!/
        {
            id: v1(), icon: Typescript, title: 'Typescript',
            text: 'Проекты становятся объемнее и сложнее, поэтому разработку приложений уже невозможно представить ' +
                'без использования Typescript, который помогает разрабатывать приложение без ошибок, экономя время'
        },
        {
            id: v1(), icon: Formik, title: 'Formik',
            text: 'Любое приложение содержит элементы взаимодействия с пользователем, а библиотека Formik ' +
                'позволяет легко работать с этими данными'
        },
        {
            id: v1(), icon: Storybook, title: 'Storybook',
            text: 'Очень удобно, когда можно посмотреть отдельные части приложения на этапе разработки,' +
                ' а также подключить систему тестирования для постоянного отслеживания на наличие ошибок'

        },
        {
            id: v1(), icon: Material, title: 'Material UI',
            text: 'Знание подобной библиотеки позволяет в короткие сроки сделать ' +
                'приложение с красивым дизайном и удобным интерфейсом'
        },
        {
            id: v1(), icon: SASS, title: 'SCSS/HTML/CSS',
            text: 'Вёрстка приложения является его "фасадом", а различные ' +
                'препроцессоры способствуют более гибкой разработке'
        },
        {
            id: v1(), icon: RestAPI, title: 'Rest API',
            text: 'Любое приложение получает данные с сервера, ' +
                'поэтому необходимо знать методы взаимодействия с ним'
        },
        {
            id: v1(), icon: Postman, title: 'Postman',
            text: 'Знание подобных программ значительно ускоряет разработку приложения, ' +
                'ведь мы можем без написания кода взаимодействовать с сервером'
        },
        {
            id: v1(), icon: Jest, title: 'JEST',
            text: 'Чтобы свести количество ошибок приложения к минимуму, ' +
                'нужно заранее разрабатывать систему тестирования, например, по методу TDD'
        },
        {
            id: v1(), icon: Git, title: 'Git',
            text: 'Любые шаги по разработке приложения, особенно в команде, ' +
                'легко сохранять и отслеживать с помощью системы контроля версий GIT'
        },
    ]);*/

    // eng
    const [skills, setSkills] = useState<Array<SkillsArrayPropsType>>([
        {
            id: v1(), icon: ReactLogo, title: 'React',
            text: 'Nowadays React is one of most popular libraries for development web-applications'
        },
        {
            id: v1(), icon: ReactRedux, title: 'React Redux',
            text: 'Using React Redux help us to develop app which matches FLUX-architecture'
        },
        {
            id: v1(), icon: ReduxToolkit, title: 'Redux Toolkit',
            text: 'Redux Toolkit is a newer version of React Redux which unify development process'
        },
        {
            id: v1(), icon: Storybook, title: 'Storybook',
            text: 'Developing with Storybook is a good example when we have tests and design of our app in one pack'
        },
        {
            id: v1(), icon: Typescript, title: 'Typescript',
            text: `Today projects become more difficult, that's why it's necessary to use Typescript for saving dev time`
        },
        /*{
            id: v1(), icon: Formik, title: 'Formik',
            text: 'Each application includes different elements of user interface. Formik helps to develop easier'
        },*/
        {
            id: v1(), icon: Angular, title: 'Angular',
            text: 'Angular lets you start small and supports you as your team and apps grow'
        },
        {
            id: v1(), icon: NextJS, title: 'Next JS',
            text: `Next.js enables you to create full-stack web applications by extending the latest React features`
        },
        {
            id: v1(), icon: Gatsby, title: 'Gatsby',
            // text: `Accelerating Gatsby’s growth and bringing composable architectures to the whole web`
            text: `Build a fast, secure, and powerful website using React-based, open-source framework`
        },
        {
            id: v1(), icon: Material, title: 'Material UI',
            text: 'Such libraries gives us opportunity to make beautiful app design in short time'
        },
        /*{
            id: v1(), icon: SASS, title: 'SCSS/HTML/CSS',
            text: 'Of course knowing of this basis is required for creating each web-application'
        },*/
        {
            id: v1(), icon: RestAPI, title: 'Rest API',
            text: `All data is located on server, that's why it's necessary know API methods`
        },
        /*{
            id: v1(), icon: Postman, title: 'Postman',
            text: `We can make requests to server without any code using Postman application`
        },*/
        {
            id: v1(), icon: Jest, title: 'JEST',
            text: `Today developers make many deploys of app per day, 
            that's necessary to support app with testing system`
        },
        {
            id: v1(), icon: Git, title: 'GIT',
            text: 'Its comfortable to develop app, especially in group, using GIT, which gives you control for any step'
        },
    ]);

    return (
        <div className={style.mainBlock2} id='skills'>
            <div className={s.container}>
                <Title title={'Skills'}/>
                <div className={style.mainBlock2_skills}>
                    <SkillsList skills={skills}/>
                </div>
            </div>
        </div>
    );
}
