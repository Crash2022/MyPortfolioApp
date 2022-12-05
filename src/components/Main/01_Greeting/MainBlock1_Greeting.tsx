import React from 'react'
// import style from './MainBlock1.module.css'
import style from './MainBlock1.module.scss'
import myPhotoMain from '../../../assets/images/photos/myPhotoMain.jpg'
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';

export const MainBlock1_Greeting = () => {
    return (
        <div className={style.mainBlock1}>
            <Fade>
                <div className={style.mainBlock1_text}>
                    <div className={style.mainBlock1_greeting}>
                        <span>Добро пожаловать!</span>
                    </div>
                    <div className={style.mainBlock1_name}>
                        <h3>Меня зовут</h3>
                        <ReactTypingEffect text='Чашин Александр' speed={100} eraseDelay={2500}/>
                        {/*<h1>Чашин Александр</h1>*/}
                    </div>
                    <div className={style.mainBlock1_work}>
                        <p>и я Front-End React-разработчик</p>
                    </div>
                </div>

                <div className={style.mainBlock1_photo}>
                    <img src={myPhotoMain} alt="my photo"/>
                </div>
            </Fade>
        </div>
    );
}
