import React from 'react'
import style from '../Main/MainBlock4Plus.module.css'

export const MainBlock4_Something = () => {

    return (
        <div className={style.mainBlock4}>
            <div className={style.mainBlock4_title}>
                <h2>Какой-то Раздел</h2>
            </div>
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
