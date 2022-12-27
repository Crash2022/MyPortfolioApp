import React from 'react'
import style from './NavMenu.module.scss'

export const NavMenu = () => {

    return (
        <div className={style.navMenu}>
            <a href="#main">Главная</a>
            <a href="#skills">Технологии</a>
            <a href="#projects">Проекты</a>
            <a href="#resume">Резюме</a>
            <a href="#contacts">Контакты</a>
        </div>
    );
}
