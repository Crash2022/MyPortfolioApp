import React from 'react'
import style from './NavMenu.module.css'

export const NavMenu = () => {
    return (
        <div className={style.navMenu}>
            <a href="#">ГЛАВНАЯ</a>
            <a href="#skills">НАВЫКИ</a>
            <a href="#projects">ПРОЕКТЫ</a>
            <a href="#some">РАЗДЕЛ?</a>
            <a href="#contacts">КОНТАКТЫ</a>
        </div>
    );
}
