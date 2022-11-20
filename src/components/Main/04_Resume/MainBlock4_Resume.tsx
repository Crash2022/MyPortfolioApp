import React from 'react'
import style from './MainBlock4.module.css'
// import styles from '../00_Main/Main.module.css'
import {Title} from '../../../common/components/Title'
import working from '../../../assets/images/photos/photo_resume.jpg'
import {Button} from "../../../common/components/Button";

export const MainBlock4_Resume = () => {

    return (
        <div className={style.mainBlock4} id='resume'>
            <Title title={'Резюме'}/>
            <div className={style.mainBlock4_resume}>

                <div className={style.mainBlock4_photo}>
                    <img src={working} alt="photo_2"/>
                </div>

                <div className={style.mainBlock4_text}>
                    <div className={style.mainBlock4_text_item}>
                        <div className={style.mainBlock4_text_title}>
                            React-разработчик
                        </div>
                        <div className={style.mainBlock4_text_body}>
                            Уже на протяжении 2-х лет разрабатываю приложения на библиотеке React.
                            Уже на протяжении 2-х лет разрабатываю приложения на библиотеке React.
                            Уже на протяжении 2-х лет разрабатываю приложения на библиотеке React.
                        </div>
                        <div className={style.mainBlock4_text_file}>
                            <Button title={'Скачать резюме'}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
