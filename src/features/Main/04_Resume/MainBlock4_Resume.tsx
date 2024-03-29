import React from 'react'
import s from "../00_Main/Main.module.css"
import style from './MainBlock4.module.scss'
import {Title} from '../../../shared/ui/Title/Title'
import working from '../../../shared/assets/images/photos/photo_resume_02.jpg'
import {Button} from "../../../shared/ui/Button/Button"
import {Fade} from "react-awesome-reveal"
import {useTranslation} from 'react-i18next'

export const MainBlock4_Resume = () => {

    const {t} = useTranslation('main-resume')

    const getFile = () => {
        fetch( 'Chashin_Alexander_Evgenievich_CV.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob)
                // Setting various property values
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = 'Chashin_Alexander_Evgenievich_CV.pdf'
                alink.click()
                alink.remove()
            })
        })
    }

    /*const getFile = () => {
        axios.get('Chashin_Alexander_Evgenievich_CV.pdf', {responseType: 'blob'})
            .then(({data}) => {
                const blob = new Blob(
                    [data],
                    {type: 'application/pdf'}
                )

                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.setAttribute('download', 'Chashin_Alexander_Evgenievich_CV.pdf')
                // alink.download = 'Chashin_Alexander_Evgenievich_CV.pdf';
                document.body.appendChild(alink)
                alink.click();
                alink.remove();
            })
    };*/

    /*const getFile = async () => {
        const res = await axios.get('Chashin_Alexander_Evgenievich_CV.pdf', {responseType: 'blob'})
            .then(response => response.data)

        const blob = new Blob([res]);
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Chashin_Alexander_Evgenievich_CV.pdf';
        document.body.appendChild(alink);
        alink.click();
        alink.remove();
        URL.revokeObjectURL(fileURL);
    };*/

    return (
        <div className={style.mainBlock4} id='resume'>
            <Fade>
                <div className={s.container}>
                    <Title title={t('CV')}/>

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
                                        {t('Front')}
                                    </div>
                                    <div className={style.mainBlock4_text_body}>
                                        {t('Knowledge')}
                                    </div>
                                    <div className={style.mainBlock4_text_file}>
                                        <Button title={t('Download_CV')} onClick={getFile}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Fade>
        </div>
    )
}
