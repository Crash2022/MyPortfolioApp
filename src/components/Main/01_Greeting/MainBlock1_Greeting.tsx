import React from 'react'
// import style from './MainBlock1.module.css'
import style from './MainBlock1.module.scss'
//import myPhotoMain from '../../assets/images/myPhotoMain.jpg'

export const MainBlock1_Greeting = () => {
    return (
        <div className={style.mainBlock1}>
            <div className={style.mainBlock1_text}>
                <div className={style.mainBlock1_greeting}>
                    <span>Добро пожаловать!</span>
                </div>
                <div className={style.mainBlock1_name}>
                    <h2>Меня зовут</h2>
                    <h1>Чашин Александр</h1>
                </div>
                <div className={style.mainBlock1_work}>
                    <p>и я - react-разработчик</p>
                </div>
            </div>

            <div className={style.mainBlock1_photo}>
                {/*<img src={myPhotoMain} alt="my photo"/>*/}
            </div>
        </div>
    );
}