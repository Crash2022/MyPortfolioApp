import React from 'react'
import style from './Footer.module.scss'
import s from '../Main/00_Main/Main.module.css'
import {TopButton} from "../../shared/ui/TopButton/TopButton";
import ReactLogo from '../../shared/assets/icons/skills/react_02.svg'
import ReactRedux from '../../shared/assets/icons/skills/redux-logo_01.svg'
import Antd from '../../shared/assets/icons/skills/antd.svg'
import Typescript from '../../shared/assets/icons/skills/typescript_02.svg'
import Zustand from '../../shared/assets/icons/skills/zustand.svg'
import NextJS from '../../shared/assets/icons/skills/next-js_01.svg'
import Material from '../../shared/assets/icons/skills/material-ui.svg'
// import Jest from '../../shared/assets/icons/skills/jest.svg'
import {useTranslation} from 'react-i18next'

export const Footer = () => {

    const {t} = useTranslation('footer')

    return (
        <div className={style.footer}>
            <div className={s.container}>
                <div className={style.footer_items}>
                    <div className={style.footer_item}>
                        <img src={ReactLogo} alt="react"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={ReactRedux} alt="redux"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={Typescript} alt="ts"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={Zustand} alt="zustand"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={Antd} alt="antd"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={Material} alt="material"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={NextJS} alt="next-js"/>
                    </div>
                    {/*<div className={style.footer_item}>*/}
                    {/*    <img src={Jest} alt="jest"/>*/}
                    {/*</div>*/}
                </div>
                <div className={style.footer_copyrigths}>
                    <div>
                        <h3>{t('Chashin')}</h3>
                    </div>
                    <div>
                        <span>{t('Copyright')}</span>
                    </div>

                </div>
            </div>
            <TopButton/>
        </div>
    )
}
