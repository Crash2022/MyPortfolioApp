import React, {useState} from 'react'
import s from './MainBlock5.module.scss'
import {Fade} from 'react-awesome-reveal'
import emailjs from 'emailjs-com'
import {Modal} from '../../../shared/ui/Modal/Modal'
import {useTranslation} from 'react-i18next'

export const MainBlock5_Contacts = () => {

    const {t} = useTranslation('main-contacts')

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const sendEmail = (e: any) => {
        e.preventDefault()

        emailjs.sendForm('service_nfpb73d', 'template_jbyxrbk', e.target, '4hkbwOjaxwH58jClT')
            .then(result => {
                // console.log(result.text)
                e.target.reset()
                setIsOpen(true)

                // setTimeout(()=> {
                //     setIsOpen(false)
                // }, 3000)

            })
            .catch(error => {
                console.log(error.text)
            })
        // e.target.reset()
    }

    return (

        <Fade>
            <div className={s.mainBlock5_contacts}>
                <div className={s.mainBlock5_leftInfo}>
                    <div className={s.mainBlock5_leftInfo_title}>
                        <h2>{t('Info')}</h2>
                    </div>
                    <div className={s.mainBlock5_leftInfo_text}>
                        {t('ContactInfo')}
                    </div>
                    <div className={s.mainBlock5_leftInfo_info}>
                        <div>{t('PhoneN')}</div>
                        <div>
                            <a href="tel:+79033988405">
                                +7 (9033) 98-84-05
                            </a>
                        </div>
                    </div>
                    <div className={s.mainBlock5_leftInfo_info}>
                        <div>{t('E_Mail')}</div>
                        <div>
                            <a href="mailto:crash56zzz@gmail.com">
                                ManForCoding@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className={s.mainBlock5_leftInfo_info}>
                        <div>GitHub:</div>
                        <div>
                            <a href="https://github.com/Crash2022">
                                github.com/Crash2022
                            </a>
                        </div>
                    </div>
                </div>

                <Modal open={isOpen} setIsOpen={setIsOpen}/>

                <form className={s.mainBlock5_contactForm} id="contacts" onSubmit={sendEmail}>
                    <div className={s.mainBlock5_form_title}>
                        <h2>{t('ContactMe')}</h2>
                    </div>
                    <div className={s.mainBlock5_form_input}>
                        <div>{t('Y_Name')}</div>
                        <input type="text" name="name"/>
                        {/*<input type="text" name="name" placeholder={t('Pl_Name')}/>*/}
                    </div>
                    <div className={s.mainBlock5_form_input}>
                        <div>{t('Y_Email')}</div>
                        <input type="text" name="email"/>
                        {/*<input type="text" name="email" placeholder={t('Pl_Email')}/>*/}
                    </div>
                    <div className={s.mainBlock5_form_textarea}>
                        <div>{t('Y_Message')}</div>
                        <textarea name="message"></textarea>
                        {/*<textarea name="message" placeholder={t('Pl_Message')}></textarea>*/}
                    </div>
                    <div className={s.mainBlock5_form_sendButton}>
                        <button type="submit">{t('Send')}</button>
                    </div>
                </form>
            </div>
        </Fade>
    )
}