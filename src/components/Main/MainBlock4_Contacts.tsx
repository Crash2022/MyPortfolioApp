import React from 'react'
import style from '../Main/MainBlock4.module.css'

export const MainBlock4_Contacts = () => {

    return (
        <div className={style.mainBlock4_contacts}>
            <div className={style.mainBlock4_leftInfo}>
                Контакты text
            </div>
            <form className={style.mainBlock4_contactForm} id='contacts'>
                <h2 className={style.mainBlock4_title}>Контакты</h2>
                <input type="text"/>
                <input type="text"/>
                <textarea name="contacts"></textarea>
                <button>Отправить</button>
            </form>
        </div>
    );
}
