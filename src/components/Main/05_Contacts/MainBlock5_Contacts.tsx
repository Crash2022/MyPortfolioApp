import React from 'react'
// import style from './MainBlock5.module.css'
import style from './MainBlock5.module.scss'

export const MainBlock5_Contacts = () => {

    return (
        <div className={style.mainBlock5_contacts}>
            <div className={style.mainBlock5_leftInfo}>
                <div className={style.mainBlock5_leftInfo_title}>
                    <h2>Контакты</h2>
                </div>
                <div className={style.mainBlock5_leftInfo_text}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
                        culpa deserunt dolorem doloremque dolores ducimus eaque eos ex harum.
                    </p>
                </div>
                <div className={style.mainBlock5_leftInfo_location}>
                    <span>Местоположение</span>
                </div>
                <div className={style.mainBlock5_leftInfo_phone}>
                    <span>Номер телефона</span>
                </div>
            </div>

            <form className={style.mainBlock5_contactForm} id='contacts'>
                <div className={style.mainBlock5_form_title}>
                    <h2>Форма обратной связи</h2>
                </div>
                <input type="text"/>
                <input type="text"/>
                <textarea name="contacts"></textarea>
                <button>Отправить</button>
            </form>
        </div>
    );
}
