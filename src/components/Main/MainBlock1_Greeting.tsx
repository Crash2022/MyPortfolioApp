import React from 'react'
import style from '../Main/MainBlock1.module.css'
import commonStyle from '../../common/styles/Container.module.css'
//import myPhotoMain from '../../assets/images/myPhotoMain.jpg'

export const MainBlock1_Greeting = () => {
    return (
        <div className={commonStyle.container}>
            <div className={style.mainBlock1}>
                <div className={style.mainBlock1_text}>
                    <span>Всем привет!</span>
                    <h1>Меня зовут Чашин Александр</h1>
                    <p>Я веб-разработчик</p>
                </div>
                <div className={style.mainBlock1_photo}>
                    {/*<img src={myPhotoMain} alt="my photo"/>*/}
                </div>
            </div>
        </div>
    );
}
