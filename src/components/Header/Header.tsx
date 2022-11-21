import React from 'react'
import style from './Header.module.css'
import {NavMenu} from "./NavMenu"

export const Header = () => {
    return (
        <div className={style.header}>
            <NavMenu/>
        </div>
    );
}
