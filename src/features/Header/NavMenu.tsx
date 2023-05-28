import React from 'react'
import style from './NavMenu.module.scss'
import {LangSwitcher} from '../../shared/ui/LangSwitcher/LangSwitcher'
import {useTranslation} from 'react-i18next'

export const NavMenu = () => {

    const {t} = useTranslation('nav-menu')

    return (
        <div className={style.navMenu}>
            <a href="#main">{t('Home')}</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">CV</a>
            <a href="#contacts">Contacts</a>
            <LangSwitcher/>
        </div>
    );
}
