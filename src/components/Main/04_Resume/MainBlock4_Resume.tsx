import React from 'react'
import style from './MainBlock4.module.scss'
import {Title} from '../../../common/components/Title'
import working from '../../../assets/images/photos/photo_resume_02.jpg'
import {Button} from "../../../common/components/Button";
import s from "../00_Main/Main.module.css";
import {Fade} from "react-awesome-reveal";

export const MainBlock4_Resume = () => {

    const getFile = () => {
        fetch( 'Chashin_Alexander_Evgenievich_CV.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Chashin_Alexander_Evgenievich_CV.pdf';
                alink.click();
                alink.remove();
            })
        })
    };

    return (
        <div className={style.mainBlock4} id='resume'>
            <Fade>
                <div className={s.container}>
                    <Title title={'CV'}/>
                    <div className={style.mainBlock4_resume}>
                        <div className={style.mainBlock4_item_column}>
                            <div className={style.mainBlock4_photo}>
                                <img src={working} alt="photo_resume"/>
                            </div>
                        </div>

                        <div className={style.mainBlock4_text}>
                            <div className={style.mainBlock4_item_column}>
                                <div className={style.mainBlock4_text_item}>
                                    <div className={style.mainBlock4_text_title}>
                                        Front-end React-developer
                                    </div>
                                    <div className={style.mainBlock4_text_body}>
                                        I sure that my knowledge and experience will help to develop applications of different levels and tasks
                                    </div>
                                    <div className={style.mainBlock4_text_file}>
                                        <Button title={'download CV'} onClick={getFile}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
