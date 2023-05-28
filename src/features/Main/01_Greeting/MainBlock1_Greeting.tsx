import React from 'react'
import style from './MainBlock1.module.scss'
import myPhotoMain from '../../../shared/assets/images/photos/myPhotoMain.jpg'
import {Fade} from "react-awesome-reveal"

export const MainBlock1_Greeting = () => {
    return (
        <div className={style.mainBlock1} id='main'>
            <Fade>
                <div className={style.mainBlock1_text}>
                    <div className={style.mainBlock1_greeting}>
                        <span>Hi there!</span>
                    </div>
                    <div className={style.mainBlock1_name}>
                        <h3>My name is</h3>
                        <h1>Chashin Alexander</h1>
                    </div>
                    <div className={style.mainBlock1_work}>
                        <p>I'm front-end developer</p>
                    </div>
                </div>

                <div className={style.mainBlock1_photo}>
                    <img src={myPhotoMain} alt="my photo"/>
                </div>
            </Fade>
        </div>
    );
}
