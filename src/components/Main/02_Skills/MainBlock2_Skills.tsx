import React, {useState} from 'react'
//import style from './MainBlock2.module.css'
import s from '../00_Main/Main.module.css'
import style from './MainBlock2.module.scss'
import {v1} from 'uuid'
import {SkillsList} from './SkillsList'
import {Title} from '../../../common/components/Title'
import ReactLogo from '../../../assets/icons/skills/react_02.svg'
import ReactRedux from '../../../assets/icons/skills/redux-logo_01.svg'
import ReduxToolkit from '../../../assets/icons/skills/ReduxToolkit_01.svg'
import ReactNative from '../../../assets/icons/skills/react_04.svg'
import Typescript from '../../../assets/icons/skills/typescript_02.svg'
import Storybook from '../../../assets/icons/skills/storybook_02.svg'
import RestAPI from '../../../assets/icons/skills/RestAPI_01.png'
import Postman from '../../../assets/icons/skills/postman_01.svg'
import Jest from '../../../assets/icons/skills/jest.svg'
import Git from '../../../assets/icons/skills/git_02.svg'
import Material from '../../../assets/icons/skills/material-ui.svg'
import SASS from '../../../assets/icons/skills/SASS_01.svg'
// import Figma from '../../../assets/icons/skills/figma.svg'
import {Fade} from "react-awesome-reveal";

export type SkillsArrayPropsType = {
    id: string
    icon: string
    title: string
    text: string
}

export const MainBlock2_Skills = () => {

    const [skills, setSkills] = useState<Array<SkillsArrayPropsType>>([
        {
            id: v1(), icon: ReactLogo, title: 'React JS',
            text: 'На сегодняшний день React является одной из самых популярных и эффективных библиотек для создания веб приложений'
        },
        {
            id: v1(), icon: ReactRedux, title: 'React Redux',
            text: 'Использование библиотеки React-Redux способствует тому, чтобы разрабатываемое приложение соответствовало FLUX-архитектуре'
        },
        {
            id: v1(), icon: ReduxToolkit, title: 'Redux-Toolkit',
            text: 'Redux Toolkit является усовершенствованной версией React-Redux и делает разработку приложения более удобной'
        },
        {
            id: v1(), icon: ReactNative, title: 'React Native',
            text: 'Сегодня более 70% информации просматривается с помощью мобильных приложений ' +
                'и поэтому знание технологий для разработки приложений для мобильных устройств является обязательным'
        },
        {
            id: v1(), icon: Typescript, title: 'Typescript',
            text: 'Проекты становятся объемнее и сложнее, поэтому разработку приложений ' +
                'уже невозможно представить без использования Typescript, который помогает разрабатывать приложение без ошибок'
        },
        {
            id: v1(), icon: Storybook, title: 'Storybook',
            text: 'Очень удобно, когда можно посмотреть отдельные части приложения на этапе разработки,' +
                ' а также подключить систему тестирования для постоянного отслеживания на наличие ошибок'

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
                'нужно заранее разрабатывать систему тестирования'
        },
        {
            id: v1(), icon: Git, title: 'Git',
            text: 'Любые шаги по разработке приложения, особенно в команде, ' +
                'легко отслеживать с помощью системы контроля версий GIT'
        },
        {
            id: v1(), icon: Material, title: 'Material UI/Ant Design',
            text: 'Знание данных библиотек позволяет в короткие сроки сделать ' +
                'приложение с красивым дизайном и удобным интерфейсом'
        },
        {
            id: v1(), icon: SASS, title: 'SCSS/HTML/CSS',
            text: 'Вёрстка приложения является его "фасадом", а различные' +
                'препроцессоры способствуют более удобной разработке'
        }/*,
        {
            id: v1(), icon: Figma, title: 'Figma',
            text: 'С помощью программы Figma можно быстро и легко сделать макет приложения,' +
                'чтобы разработка была более продуктивной'
        }*/
    ]);

    return (
        <div className={style.mainBlock2} id='skills'>
            {/*<Fade>*/}
                <div className={s.container}>

                    <Title title={'Технологии'}/>

                    {/*flex row*/}
                    <div className={style.mainBlock2_skills}>
                        <SkillsList skills={skills}/>
                    </div>

                </div>
            {/*</Fade>*/}
        </div>
    );
}
