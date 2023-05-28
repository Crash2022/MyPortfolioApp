import React from 'react'
import {useTranslation} from 'react-i18next'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({className = ''}) => {

    const {t, i18n} = useTranslation()

    const toggleLanguage = (language: string): void => {
        void i18n.changeLanguage(language)
    }

    return (
        <div className={className}>
            <div onClick={() => toggleLanguage('en')}>
                EN
            </div>
            <div onClick={() => toggleLanguage('ru')}>
                RU
            </div>
        </div>
    )
}