import React from 'react'
// import style from './MainBlock5.module.css'
import style from './MainBlock5.module.scss'
import {Button} from "../../../common/components/Button";

export const MainBlock5_Contacts = () => {

    return (
        <div className={style.mainBlock5_contacts}>
            <div className={style.mainBlock5_leftInfo}>
                <div className={style.mainBlock5_leftInfo_title}>
                    <h2>Контакты</h2>
                </div>
                <div className={style.mainBlock5_leftInfo_text}>
                    <p>
                        Если вам необходимо разработать веб приложение, вы всегда можете
                        обратиться ко мне любым из указнных ниже способов
                    </p>
                </div>
                {/*<div className={style.mainBlock5_leftInfo_location}>*/}
                {/*    <div>Местоположение:</div>*/}
                {/*    <div>Россия, г.Москва</div>*/}
                {/*</div>*/}
                <div className={style.mainBlock5_leftInfo_phone}>
                    <div>Номер телефона:</div>
                    <div>+7 (903) 311-11-11</div>
                </div>
                <div className={style.mainBlock5_leftInfo_email}>
                    <div>Электронная почта:</div>
                    <div>1111111@gmail.com</div>
                </div>
            </div>

            <form className={style.mainBlock5_contactForm} id='contacts'>
                <div className={style.mainBlock5_form_title}>
                    <h2>Обратная связь</h2>
                </div>
                <div className={style.mainBlock5_form_input}>
                    <div>Введите ваше имя:</div>
                    <input type="text"/>
                </div>
                <div className={style.mainBlock5_form_input}>
                    <div>Введите ваш e-mail:</div>
                    <input type="text"/>
                </div>
                <div className={style.mainBlock5_form_textarea}>
                    <div>Введите ваше сообщение:</div>
                    <textarea name="contacts"></textarea>
                </div>
                <div className={style.mainBlock5_form_sendButton}>
                    <button>Отправить</button>
                </div>
            </form>
        </div>
    );
}
