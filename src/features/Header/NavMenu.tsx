import React from 'react'
import style from './NavMenu.module.scss'
import {LangSwitcher} from '../../shared/ui/LangSwitcher/LangSwitcher'
import {useTranslation} from 'react-i18next'

export const NavMenu = () => {

    const {t} = useTranslation('nav-menu')

    return (
        <div className={style.navMenu}>
            <a href="#main">{t('Home')}</a>
            <a href="#skills">{t('Skills')}</a>
            <a href="#projects">{t('Projects')}</a>
            <a href="#resume">{t('CV')}</a>
            <a href="#contacts">{t('Contacts')}</a>
            <LangSwitcher/>
        </div>
    )
}
