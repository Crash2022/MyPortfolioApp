import React from 'react'
// import style from './NavMenu.module.css'
import style from './NavMenu.module.scss'
// import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
// import * as Scroll from 'react-scroll';


export const NavMenu = () => {

    return (
        <div className={style.navMenu}>
            <a href="#main">Главная</a>
            <a href="#skills">Технологии</a>

            {/*<Link activeClass={style.active}
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
            >
                Технологии
            </Link>*/}

            <a href="#projects">Проекты</a>
            <a href="#resume">Резюме</a>
            <a href="#contacts">Контакты</a>
        </div>
    );
}
