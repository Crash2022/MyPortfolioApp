import React, {useState} from 'react'
import style from '../Main/MainBlock2.module.css'
import commonStyle from '../../common/styles/Container.module.css'
import {v1} from 'uuid';
import {SkillsList} from './SkillsList';

//export type SkillsArray = Array<SkillsPropsType>

export type SkillsArrayPropsType = {
    id: string
    icon: string
    title: string
    text: string
}

export const MainBlock2_Skills = () => {

    const [skills, setSkills] = useState<Array<SkillsArrayPropsType>>([
        {id: v1(), icon: 'ICON', title: 'React',
            text: 'Can make projects on ReactNative'},
        {id: v1(), icon: 'ICON', title: 'Angular',
            text: 'Can make projects on Angular'},
        {id: v1(), icon: 'ICON', title: 'JavaScript',
            text: 'Can make projects on JavaScriptdfgdgdfgdfgggggggggggggggggggg'}
        /*{id: v1(), icon: 'ICON', title: 'JavaScript',
            text: 'Can make projects on JavaScriptdfgdgdfgdfgggggggggggggggggggg'},
        {id: v1(), icon: 'ICON', title: 'JavaScript',
            text: 'Can make projects on JavaScriptdfgdgdfgdfgggggggggggggggggggg'},
        {id: v1(), icon: 'ICON', title: 'JavaScript',
            text: 'Can make projects on JavaScriptdfgdgdfgdfgggggggggggggggggggg'}*/
    ])

    return (
        <div className={commonStyle.container}>
            <div className={style.mainBlock2}>
                <div className={style.mainBlock2_title}>
                    <h2>Мои преимущества</h2>
                </div>
                <div className={style.mainBlock2_skills}>
                    <SkillsList skills={skills}/>
                </div>
            </div>
        </div>
    );
}
