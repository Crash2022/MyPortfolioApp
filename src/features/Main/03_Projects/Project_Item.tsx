import React from 'react'
import s from './MainBlock3.module.scss'
import {StyleType} from "./MainBlock3_Projects"
import {useTranslation} from 'react-i18next'

type ProjectItemPropsType = {
    title: string
    text: string
    style: StyleType
    link: string
}

export const Project_Item: React.FC<ProjectItemPropsType> = ({title, text, style, link}) => {

    const {t} = useTranslation('main-projects')

    return (
        <>
            <div className={s.item_image} style={style}>
                <a className={s.item_button} href={link}>{t('Go')}</a>
            </div>
            <div className={s.item_title}><h3>{title}</h3></div>
            <div className={s.item_description}>{text}</div>
        </>
    )
}