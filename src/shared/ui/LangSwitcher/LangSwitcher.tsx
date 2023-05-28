import React from 'react'
import s from './LangSwitcher.module.scss'
import {useTranslation} from 'react-i18next'
import EN_Flag from '../../assets/icons/decor/flag-uk.svg'
import RU_Flag from '../../assets/icons/decor/flag-ru.svg'

export const LangSwitcher = () => {

    const {i18n} = useTranslation()
    const currentLang = i18n.language

    const toggleLanguage = (language: string): void => {
        void i18n.changeLanguage(language)
    }

    return (
        <div className={s.langSwitcher}>
            <div className={s.languageItem}
                 onClick={() => toggleLanguage('ru')}
            >
                <div>
                    <img src={RU_Flag} alt='en-flag' width={30} height={20}/>
                </div>
                <div className={currentLang === 'ru' ? s.active: ''}>RU</div>
            </div>
            <div className={s.languageItem}
                 onClick={() => toggleLanguage('en')}
            >
                <div>
                    <img src={EN_Flag} alt='en-flag' width={30} height={20}/>
                </div>
                <div className={currentLang === 'en' ? s.active: ''}>EN</div>
            </div>
        </div>
    )
}