import React from 'react'
import style from './NavMenu.module.css'

export const NavMenu = () => {
    return (
        <div className={style.navMenu}>
            <a href="">ГЛАВНАЯ</a>
            <a href="">ОПЫТ</a>
            <a href="">ПРОЕКТЫ</a>
            <a href="">КОНТАКТЫ</a>
        </div>
    );
}
