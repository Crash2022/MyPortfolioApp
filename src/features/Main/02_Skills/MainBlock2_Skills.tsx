import React, {useState, useEffect} from 'react'
import s from '../00_Main/Main.module.css'
import style from './MainBlock2.module.scss'
import {v1} from 'uuid'
import {SkillsList} from './SkillsList'
import {Title} from '../../../shared/ui/Title/Title'
import ReactLogo from '../../../shared/assets/icons/skills/react_02.svg'
import ReactRedux from '../../../shared/assets/icons/skills/redux-logo_01.svg'
import ReduxToolkit from '../../../shared/assets/icons/skills/ReduxToolkit_01.svg'
import Typescript from '../../../shared/assets/icons/skills/typescript_02.svg'
import Angular from '../../../shared/assets/icons/skills/angular.svg'
import Storybook from '../../../shared/assets/icons/skills/storybook_02.svg'
import RestAPI from '../../../shared/assets/icons/skills/RestAPI_01.png'
import NextJS from '../../../shared/assets/icons/skills/next-js_01.svg'
import Gatsby from '../../../shared/assets/icons/skills/gatsby_02.svg'
import Jest from '../../../shared/assets/icons/skills/jest.svg'
import Git from '../../../shared/assets/icons/skills/git_02.svg'
import Material from '../../../shared/assets/icons/skills/material-ui.svg'
import {useTranslation} from 'react-i18next'
import i18n from 'i18next'

export type SkillsArrayPropsType = {
    id: string
    icon: string
    title: string
    text: string
}

export const MainBlock2_Skills = () => {

    const {t} = useTranslation('main-skills')

    const [skills, setSkills] = useState<Array<SkillsArrayPropsType>>([
        {
            id: v1(), icon: ReactLogo, title: 'React',
            text: t('React')
        },
        {
            id: v1(), icon: ReactRedux, title: 'React Redux',
            text: t('ReactRedux')
        },
        {
            id: v1(), icon: ReduxToolkit, title: 'Redux Toolkit',
            text: t('ReactToolkit')
        },
        {
            id: v1(), icon: Storybook, title: 'Storybook',
            text: t('Storybook')
        },
        {
            id: v1(), icon: Typescript, title: 'Typescript',
            text: t('Typescript')
        },
        /*{
            id: v1(), icon: Formik, title: 'Formik',
            text: 'Each application includes different elements of user interface. Formik helps to develop easier'
        },*/
        {
            id: v1(), icon: Angular, title: 'Angular',
            text: t('Angular')
        },
        {
            id: v1(), icon: NextJS, title: 'Next JS',
            text: t('NextJS')
        },
        {
            id: v1(), icon: Gatsby, title: 'Gatsby',
            // text: `Accelerating Gatsby’s growth and bringing composable architectures to the whole web`
            text: t('Gatsby')
        },
        {
            id: v1(), icon: Material, title: 'Material UI',
            text: t('Material')
        },
        /*{
            id: v1(), icon: SASS, title: 'SCSS/HTML/CSS',
            text: 'Of course knowing of this basis is required for creating each web-application'
        },*/
        {
            id: v1(), icon: RestAPI, title: 'Rest API',
            text: t('RestAPI')
        },
        /*{
            id: v1(), icon: Postman, title: 'Postman',
            text: `We can make requests to server without any code using Postman application`
        },*/
        {
            id: v1(), icon: Jest, title: 'JEST',
            text: t('Jest')
        },
        {
            id: v1(), icon: Git, title: 'GIT',
            text: t('Git')
        },
    ])

    // useEffect(() => {
    //     if (i18n.language === 'en') {
    //         i18n.changeLanguage('en').then()
    //     }
    //     if (i18n.language === 'ru') {
    //         i18n.changeLanguage('ru').then()
    //     }
    // }, [i18n.language])

    return (
        <div className={style.mainBlock2} id='skills'>
            <div className={s.container}>
                <Title title={t('T_Skills')}/>
                <div className={style.mainBlock2_skills}>
                    <SkillsList skills={skills}/>
                </div>
            </div>
        </div>
    )
}
