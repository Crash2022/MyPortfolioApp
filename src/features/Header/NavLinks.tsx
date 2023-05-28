import React from 'react'
import {useTranslation} from 'react-i18next'

export const NavLinks = () => {

    const {t} = useTranslation('nav-menu')

    return (
        <>
            <a href="#main">{t('Home')}</a>
            <a href="#skills">{t('Skills')}</a>
            <a href="#projects">{t('Projects')}</a>
            <a href="#resume">{t('CV')}</a>
            <a href="#contacts">{t('Contacts')}</a>
        </>
    )
}