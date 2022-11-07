import React from 'react'
import style from './MainBlock4.module.css'
import {Title} from "../../../common/components/Title";

export const MainBlock4_Something = () => {

    return (
        <div className={style.mainBlock4} id='some'>
            {/*<div className={style.mainBlock4_title}>*/}
            {/*    <h2>Какой-то Раздел</h2>*/}
            {/*</div>*/}
            <Title title={'Какой-то Раздел'}/>
            <div className={style.mainBlock4_skills}>
                <div className={style.mainBlock4_skillItem}>1</div>
                <div className={style.mainBlock4_skillItem}>1</div>
                <div className={style.mainBlock4_skillItem}>1</div>
                <div className={style.mainBlock4_skillItem}>1</div>
                <div className={style.mainBlock4_skillItem}>1</div>
                <div className={style.mainBlock4_skillItem}>1</div>
            </div>
        </div>
    );
}
