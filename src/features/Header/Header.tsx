import React from 'react'
import style from './Header.module.scss'
import {LangSwitcher} from '../../shared/ui/LangSwitcher/LangSwitcher'
import {NavLinks} from './NavLinks'

export const Header = () => {

    return (
        <div className={style.header} id='main'>
            <div className={style.container}>
            <nav className={style.navMenu}>
                <NavLinks/>
                <LangSwitcher/>
            </nav>
            </div>
        </div>
    )
}
