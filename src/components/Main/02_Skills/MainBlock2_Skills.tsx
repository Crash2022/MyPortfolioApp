import React, {useState} from 'react'
//import style from './MainBlock2.module.css'
import style from './MainBlock2.module.scss'
import {v1} from 'uuid'
import {SkillsList} from './SkillsList'
import {Title} from '../../../common/components/Title'

export type SkillsArrayPropsType = {
    id: string
    icon: string
    title: string
    text: string
}

export const MainBlock2_Skills = () => {

    const [skills, setSkills] = useState<Array<SkillsArrayPropsType>>([
        {
            id: v1(), icon: 'ICON', title: 'React JS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: v1(), icon: 'ICON', title: 'React Redux',
            text: 'Can make projects on Angular'
        },
        {
            id: v1(), icon: 'ICON', title: 'React Native',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ' +
                'culpa deserunt dolorem doloremque dolores ducimus eaque eos ex harum.'
        },
        {
            id: v1(), icon: 'ICON', title: 'Typescript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt ' +
                'dolorem doloremque dolores ducimus eaque eos ex harum minus neque non optio porro possimus ' +
                'qui recusandae repellat voluptate voluptatem?'
        },
        {
            id: v1(), icon: 'ICON', title: 'Storybook',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {id: v1(), icon: 'ICON', title: 'Postman',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt' +
                ' dolorem doloremque dolores ducimus.'
        },
        {
            id: v1(), icon: 'ICON', title: 'Git',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt ' +
                'dolorem doloremque dolores ducimus eaque eos ex harum minus neque non optio porro possimus ' +
                'qui recusandae repellat voluptate voluptatem?'
        },
        {
            id: v1(), icon: 'ICON', title: 'Unit Test',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {id: v1(), icon: 'ICON', title: 'Figma',
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
