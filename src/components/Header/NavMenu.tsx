import React from 'react'
import style from './NavMenu.module.css'

export const NavMenu = () => {
    return (
        <div className={style.navMenu}>
            <a href="#">Главная</a>
            <a href="#skills">Навыки</a>
            <a href="#projects">Проекты</a>
            <a href="#resume">Резюме</a>
            <a href="#contacts">Контакты</a>
        </div>
    );
}
