import React, {useState} from 'react'
//import style from './MainBlock2.module.css'
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
import Git from '../../../assets/icons/skills/git_02.svg'
import SASS from '../../../assets/icons/skills/SASS_01.svg'
import UnitTest from '../../../assets/icons/skills/jest.svg'
import Figma from '../../../assets/icons/skills/figma.svg'

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
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: v1(), icon: ReactRedux, title: 'React Redux',
            text: 'Can make projects on Angular'
        },
        {
            id: v1(), icon: ReduxToolkit, title: 'Redux-Toolkit',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ' +
                'culpa deserunt dolorem doloremque.'
        },
        {
            id: v1(), icon: ReactNative, title: 'React Native',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt ' +
                'dolorem doloremque dolores'
        },
        {
            id: v1(), icon: Typescript, title: 'Typescript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {id: v1(), icon: Storybook, title: 'Storybook',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt' +
                ' dolorem doloremque dolores.'
        },
        {
            id: v1(), icon: RestAPI, title: 'Rest API',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt ' +
                'dolorem doloremque dolores ducimus eaque eos ex harum'
        },
        {
            id: v1(), icon: Postman, title: 'Postman',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {id: v1(), icon: UnitTest, title: 'JEST',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt' +
                ' dolorem doloremque dolores ducimus.'
        },
        {
            id: v1(), icon: Git, title: 'Git',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt ' +
                'dolorem doloremque dolores ducimus eaque eos ex harum minus neque'
        },
        {
            id: v1(), icon: SASS, title: 'HTML/CSS/SASS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {id: v1(), icon: Figma, title: 'Figma',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt'
        }
    ]);

    return (
        <div className={style.mainBlock2} id='skills'>
            <Title title={'Мои навыки'}/>
            <div className={style.mainBlock2_skills}>
                <SkillsList skills={skills}/>
            </div>
        </div>
    );
}
