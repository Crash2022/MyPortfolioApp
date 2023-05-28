import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

void i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: ['ru', 'en'],
        // debug: process.env.NODE_ENV === 'development',
        debug: true,
        detection: {
            order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
            caches: ["cookie"],
        },
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        },
        // resources: {
        //     en: {
        //         translation: {
        //             // here we will place our translations...
        //         }
        //     },
        //     ru: {
        //         translation: {
        //             // here we will place our translations...
        //         }
        //     },
        // }
    })

export default i18n
