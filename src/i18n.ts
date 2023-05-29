import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

void i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: ['en', 'ru'],
        // lng: 'ru',
        // defaultNS: 'ru',
        // debug: process.env.NODE_ENV === 'development',
        debug: true,
        detection: {
            order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
            caches: ["cookie"],
        },
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        },
    })

export default i18n
