import React from 'react'
import style from './NavMenu.module.scss'

export const NavMenu = () => {

    return (
        <div className={style.navMenu}>
            <a href="#main">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">CV</a>
            <a href="#contacts">Contacts</a>
        </div>
    );
}
