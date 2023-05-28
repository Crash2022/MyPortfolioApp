import React from 'react'
import style from './Footer.module.scss'
import s from '../Main/00_Main/Main.module.css'
import {TopButton} from "../../shared/ui/TopButton/TopButton";
import ReactLogo from '../../shared/assets/icons/skills/react_02.svg'
import ReactRedux from '../../shared/assets/icons/skills/redux-logo_01.svg'
import Angular from '../../shared/assets/icons/skills/angular.svg'
import Typescript from '../../shared/assets/icons/skills/typescript_02.svg'
import Jest from '../../shared/assets/icons/skills/jest.svg'
import NextJS from '../../shared/assets/icons/skills/next-js_01.svg'
import Gatsby from '../../shared/assets/icons/skills/gatsby_02.svg'
import {useTranslation} from 'react-i18next';

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
                        <img src={Angular} alt="angular"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={NextJS} alt="next-js"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={Gatsby} alt="gatsby"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={Jest} alt="jest"/>
                    </div>
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
    );
}
