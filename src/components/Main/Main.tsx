import React from 'react'
import style from '../Main/Main.module.css'
import {MainBlock1} from "./MainBlock1";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <MainBlock1/>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </div>
    );
}
