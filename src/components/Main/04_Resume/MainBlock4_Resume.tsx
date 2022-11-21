import React from 'react'
// import style from './MainBlock4.module.css'
import style from './MainBlock4.module.scss'
import {Title} from '../../../common/components/Title'
import working from '../../../assets/images/photos/photo_resume_03.jpg'
import {Button} from "../../../common/components/Button";

export const MainBlock4_Resume = () => {

    return (
        <div className={style.mainBlock4} id='resume'>
            <Title title={'Резюме'}/>
            <div className={style.mainBlock4_resume}>

                <div className={style.mainBlock4_photo}>
                    <img src={working} alt="photo_resume"/>
                </div>

                <div className={style.mainBlock4_text}>
                    <div className={style.mainBlock4_text_item}>
                        <div className={style.mainBlock4_text_title}>
                            React-разработчик
                        </div>
                        <div className={style.mainBlock4_text_body}>
                            Мой стэк знания технологий, а также многолетний опыт позволяют
                            разрабатывать веб приложения различного уровня и потребностей
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
