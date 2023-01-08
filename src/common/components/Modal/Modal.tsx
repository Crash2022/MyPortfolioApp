import React from 'react'
import s from './Modal.module.css'

type ModalPropsType = {
    open: boolean
    setIsOpen: (value: boolean) => void
}

export const Modal: React.FC<ModalPropsType> = ({open, setIsOpen}) => {

    const openModal = open ? s.myModal : s.hide_modal;

    return (
        <div className={openModal}>
            <div>
                E-mail was successfully sent
            </div>
            <div className={s.closeButton} onClick={()=>{setIsOpen(false)}}>
                X
            </div>
        </div>
    )
}