import React from 'react'
import s from './MainBlock1.module.scss'
import myPhotoMain from '../../../shared/assets/images/photos/myPhotoMain.jpg'
import {Fade} from "react-awesome-reveal"
import {useTranslation} from 'react-i18next'

export const MainBlock1_Greeting = () => {

    const {t} = useTranslation('main-greeting')

    return (
        <div className={s.mainBlock1} id='main'>
            <Fade>
                <div className={s.mainBlock1_text}>
                    <div className={s.mainBlock1_greeting}>
                        <span>{t('Hi')}</span>
                    </div>
                    <div className={s.mainBlock1_name}>
                        <h3>{t('Name')}</h3>
                        <h1>{t('Chashin')}</h1>
                    </div>
                    <div className={s.mainBlock1_work}>
                        <p>{t('Front')}</p>
                    </div>
                </div>

                <div className={s.mainBlock1_photo}>
                    <img src={myPhotoMain} alt="my photo"/>
                </div>
            </Fade>
        </div>
    )
}
