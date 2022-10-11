import React, {useState} from 'react'
import style from '../Main/MainBlock2.module.css'
import {v1} from 'uuid';
import {SkillsList} from './SkillsList';

export type SkillsArrayPropsType = {
    id: string
    icon: string
    title: string
    text: string
}

export const MainBlock2_Skills = () => {

    const [skills, setSkills] = useState<Array<SkillsArrayPropsType>>([
        {
            id: v1(), icon: 'ICON', title: 'React',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: v1(), icon: 'ICON', title: 'Angular',
            text: 'Can make projects on Angular'
        },
        {
            id: v1(), icon: 'ICON', title: 'JavaScript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ' +
                'culpa deserunt dolorem doloremque dolores ducimus eaque eos ex harum.'
        },
        {
            id: v1(), icon: 'ICON', title: 'JavaScript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt ' +
                'dolorem doloremque dolores ducimus eaque eos ex harum minus neque non optio porro possimus ' +
                'qui recusandae repellat voluptate voluptatem?'
        },
        {
            id: v1(), icon: 'ICON', title: 'JavaScript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }/*,
        {id: v1(), icon: 'ICON', title: 'JavaScript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deserunt' +
                ' dolorem doloremque dolores ducimus.'
        }*/
    ]);

    return (
        <div className={style.mainBlock2} id='skills'>
            <h2 className={style.mainBlock2_title}>Мои преимущества</h2>
            <div className={style.mainBlock2_skills}>
                <SkillsList skills={skills}/>
            </div>
        </div>
    );
}
