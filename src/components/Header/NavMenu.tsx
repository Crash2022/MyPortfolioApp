import React from 'react'
import style from './NavMenu.module.css'

export const NavMenu = () => {
    return (
        <div className={style.navMenu}>
            <a href="">Главная</a>
            <a href="">Опыт</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
}
