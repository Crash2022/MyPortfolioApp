import React, {useState} from 'react'
import style from './MainBlock5.module.scss'
import {Fade} from 'react-awesome-reveal'
import emailjs from 'emailjs-com'
import {Modal} from '../../../shared/ui/Modal/Modal'

export const MainBlock5_Contacts = () => {

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
            <div className={style.mainBlock5_contacts}>
                <div className={style.mainBlock5_leftInfo}>
                    <div className={style.mainBlock5_leftInfo_title}>
                        <h2>Info</h2>
                    </div>
                    <div className={style.mainBlock5_leftInfo_text}>
                        <p>
                            For any questions you can contact with me with any way below
                        </p>
                    </div>
                    <div className={style.mainBlock5_leftInfo_info}>
                        <div>Phone number:</div>
                        <div>
                            <a href="tel:+79033988405">
                                +7 (9033) 98-84-05
                            </a>
                        </div>
                    </div>
                    <div className={style.mainBlock5_leftInfo_info}>
                        <div>E-mail:</div>
                        <div>
                            <a href="mailto:crash56zzz@gmail.com">
                                ManForCoding@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className={style.mainBlock5_leftInfo_info}>
                        <div>GitHub:</div>
                        <div>
                            <a href="https://github.com/Crash2022">
                                github.com/Crash2022
                            </a>
                        </div>
                    </div>
                </div>

                <Modal open={isOpen} setIsOpen={setIsOpen}/>

                <form className={style.mainBlock5_contactForm} id="contacts" onSubmit={sendEmail}>
                    <div className={style.mainBlock5_form_title}>
                        <h2>Contact Me</h2>
                    </div>
                    <div className={style.mainBlock5_form_input}>
                        <div>Your name:</div>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className={style.mainBlock5_form_input}>
                        <div>Your e-mail:</div>
                        <input type="text" name="email" placeholder="E-Mail"/>
                    </div>
                    <div className={style.mainBlock5_form_textarea}>
                        <div>Your message:</div>
                        <textarea name="message" placeholder="Enter your message"></textarea>
                    </div>
                    <div className={style.mainBlock5_form_sendButton}>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </Fade>
    )
}