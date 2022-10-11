import React from 'react'
import style from './Main.module.css'
import {MainBlock1_Greeting} from './MainBlock1_Greeting'
import {MainBlock2_Skills} from './MainBlock2_Skills'
import {MainBlock3_Projects} from "./MainBlock3_Projects";
import {MainBlock4_Contacts} from "./MainBlock4_Contacts";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <MainBlock1_Greeting/>
                <MainBlock2_Skills/>
                <MainBlock3_Projects/>
                <MainBlock4_Contacts/>
            </div>
        </div>
    );
}
