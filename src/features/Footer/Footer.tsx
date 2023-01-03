import React from 'react'
import style from './Footer.module.scss'
import s from '../Main/00_Main/Main.module.css'
import {TopButton} from "../../common/components/TopButton/TopButton";
import ReactLogo from '../../assets/icons/skills/react_02.svg'
import ReactRedux from '../../assets/icons/skills/redux-logo_01.svg'
import ReduxToolkit from '../../assets/icons/skills/ReduxToolkit_01.svg'
import Formik from '../../assets/icons/skills/formik.svg'
import Typescript from '../../assets/icons/skills/typescript_02.svg'
import RestAPI from '../../assets/icons/skills/RestAPI_01.png'
import Jest from '../../assets/icons/skills/jest.svg'
import Material from '../../assets/icons/skills/material-ui.svg'

export const Footer = () => {
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
                        <img src={ReduxToolkit} alt="toolkit"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={Typescript} alt="ts"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={Formik} alt="formik"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={RestAPI} alt="rest-api"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={Jest} alt="jest"/>
                    </div>
                    <div className={style.footer_item}>
                        <img src={Material} alt="material-ui"/>
                    </div>
                </div>
                <div className={style.footer_copyrigths}>
                    <div>
                        <h3>Chashin Alexander.</h3>
                    </div>
                    <div>
                        <span>Copyright, 2022</span>
                    </div>

                </div>
            </div>
            <TopButton/>
        </div>
    );
}
