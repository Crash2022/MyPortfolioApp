import React from 'react'
import style from './Footer.module.css'
import styleMain from '../Main/Main.module.css'

export const Footer = () => {
    return (
        <div className={styleMain.mainBlock}>
            <div className={styleMain.container}>
                <div className={style.footer}>
                    <h3 className={style.footer_title}>Чашин Александр</h3>
                    <div className={style.footer_items}>
                        <div className={style.footer_item}>1</div>
                        <div className={style.footer_item}>2</div>
                        <div className={style.footer_item}>3</div>
                        <div className={style.footer_item}>4</div>
                    </div>
                    <span>Все права защищены, 2022</span>
                </div>
            </div>
        </div>
    );
}
