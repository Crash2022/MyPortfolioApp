import React from 'react'
import s from '../00_Main/Main.module.css'
import style from './MainBlock2.module.scss'
import {SkillsList} from './SkillsList'
import {Title} from '../../../shared/ui/Title/Title'
import ReactLogo from '../../../shared/assets/icons/skills/react_02.svg'
import ReactRedux from '../../../shared/assets/icons/skills/redux-logo_01.svg'
import ReduxToolkit from '../../../shared/assets/icons/skills/ReduxToolkit_01.svg'
import Typescript from '../../../shared/assets/icons/skills/typescript_02.svg'
import Storybook from '../../../shared/assets/icons/skills/storybook_02.svg'
import RestAPI from '../../../shared/assets/icons/skills/RestAPI_01.png'
import NextJS from '../../../shared/assets/icons/skills/next-js_01.svg'
import Jest from '../../../shared/assets/icons/skills/jest.svg'
import Git from '../../../shared/assets/icons/skills/git_02.svg'
import Material from '../../../shared/assets/icons/skills/material-ui.svg'
import Antd from '../../../shared/assets/icons/skills/antd.svg'
import Zustand from '../../../shared/assets/icons/skills/zustand.svg'
// import Vue from '../../../shared/assets/icons/skills/vue-logo.svg'
import {useTranslation} from 'react-i18next'

export type SkillsArrayPropsType = {
    id: string
    icon: string
    title: string
    text: string
}

export const MainBlock2_Skills = () => {

    const {t} = useTranslation('main-skills')

    const skills: Array<SkillsArrayPropsType> = [
        { id: '1', icon: ReactLogo, title: 'React', text: 'S_React' },
        { id: '2', icon: ReactRedux, title: 'ReactRedux', text: 'S_ReactRedux' },
        { id: '3', icon: ReduxToolkit, title: 'ReduxToolkit', text: 'S_ReactToolkit' },
        { id: '4', icon: Typescript, title: 'Typescript', text: 'S_Typescript' },
        { id: '5', icon: Storybook, title: 'Storybook', text: 'S_Storybook' },
        { id: '6', icon: NextJS, title: 'NextJS', text: 'S_NextJS' },
        { id: '7', icon: Zustand, title: 'Zustand', text: 'S_Zustand' },
        { id: '8', icon: Antd, title: 'AntDesign', text: 'S_Antd' },
        { id: '9', icon: Material, title: 'MaterialUI', text: 'S_Material' },
        { id: '10', icon: RestAPI, title: 'RestAPI', text: 'S_RestAPI' },
        { id: '11', icon: Jest, title: 'JEST', text: 'S_Jest' },
        { id: '12', icon: Git, title: 'GIT', text: 'S_Git' },
    ]

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
