import React from 'react'
import style from '../../common/styles/Container.module.css'
import {MainBlock1_Greeting} from './MainBlock1_Greeting'
import {MainBlock2_Skills} from './MainBlock2_Skills'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <MainBlock1_Greeting/>
            <MainBlock2_Skills/>
 {/*           <div>3</div>
            <div>4</div>
            <div>5</div>*/}
        </div>
    );
}
