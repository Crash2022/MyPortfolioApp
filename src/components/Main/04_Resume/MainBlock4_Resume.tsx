import React from 'react'
import style from './MainBlock4.module.scss'
import {Title} from '../../../common/components/Title'
import working from '../../../assets/images/photos/photo_resume_02.jpg'
import {Button} from "../../../common/components/Button";
import s from "../00_Main/Main.module.css";
import {Fade} from "react-awesome-reveal";

export const MainBlock4_Resume = () => {

    return (
        <div className={style.mainBlock4} id='resume'>
            <Fade>
                <div className={s.container}>
                    <Title title={'Резюме'}/>
                    <div className={style.mainBlock4_resume}>
                        <div className={style.mainBlock4_item_column}>
                            <div className={style.mainBlock4_photo}>
                                <img src={working} alt="photo_resume"/>
                            </div>
                        </div>

                        <div className={style.mainBlock4_text}>
                            <div className={style.mainBlock4_item_column}>
                                <div className={style.mainBlock4_text_item}>
                                    <div className={style.mainBlock4_text_title}>
                                        Front-End React-разработчик
                                    </div>
                                    <div className={style.mainBlock4_text_body}>
                                        Мой стэк знания технологий, а также опыт позволяют
                                        разрабатывать веб приложения различного уровня и потребностей
                                    </div>
                                    <div className={style.mainBlock4_text_file}>
                                        <Button title={'Скачать резюме'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
