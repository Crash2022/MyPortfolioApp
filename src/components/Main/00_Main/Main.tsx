import React from 'react'
import style from './Main.module.css'
import {MainBlock1_Greeting} from '../01_Greeting/MainBlock1_Greeting'
import {MainBlock2_Skills} from '../02_Skills/MainBlock2_Skills'
import {MainBlock3_Projects} from "../03_Projects/MainBlock3_Projects";
import {MainBlock5_Contacts} from "../05_Contacts/MainBlock5_Contacts";
import {MainBlock4_Something} from "../04_Some/MainBlock4_Something";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <MainBlock1_Greeting/>
                <MainBlock2_Skills/>
                <MainBlock3_Projects/>
                <MainBlock4_Something/>
                <MainBlock5_Contacts/>
            </div>
        </div>
    );
}
