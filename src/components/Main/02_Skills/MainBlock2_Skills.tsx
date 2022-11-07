import React, {useState} from 'react'
//import style from './MainBlock2.module.css'
import style from './MainBlock2.module.scss'
import {v1} from 'uuid'
import {SkillsList} from './SkillsList'
import {Title} from '../../../common/components/Title'
import ReactLogo from '../../../assets/icons/skills/react_02.svg'
import ReactRedux from '../../../assets/icons/skills/redux-logo.svg'
import ReactNative from '../../../assets/icons/skills/react_04.svg'
import Typescript from '../../../assets/icons/skills/typescript_02.svg'
import Storybook from '../../../assets/icons/skills/storybook_02.svg'
import Postman from '../../../assets/icons/skills/postman_01.svg'
import Git from '../../../assets/icons/skills/git_02.svg'
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
            id: v1(), icon: ReactNative, title: 'React Native',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ' +
                'culpa deserunt dolorem doloremque dolores ducimus eaque eos ex harum.'
        },
        {
            id: v1(), icon: Typescript, title: 'Typescript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt ' +
                'dolorem doloremque dolores ducimus eaque eos ex harum minus neque non optio porro possimus ' +
                'qui recusandae repellat voluptate voluptatem?'
        },
        {
            id: v1(), icon: Storybook, title: 'Storybook',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {id: v1(), icon: Postman, title: 'Postman',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt' +
                ' dolorem doloremque dolores ducimus.'
        },
        {
            id: v1(), icon: Git, title: 'Git',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt ' +
                'dolorem doloremque dolores ducimus eaque eos ex harum minus neque non optio porro possimus ' +
                'qui recusandae repellat voluptate voluptatem?'
        },
        {
            id: v1(), icon: UnitTest, title: 'Unit Test',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {id: v1(), icon: Figma, title: 'Figma',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt' +
                ' dolorem doloremque dolores ducimus.'
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
