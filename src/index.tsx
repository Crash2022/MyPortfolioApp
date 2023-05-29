import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './App'
import './i18n'
import {LoaderScreen} from './shared/ui/Loader/LoaderScreen'

ReactDOM.render(
    <Suspense fallback={<LoaderScreen variant={'ellipsis'}/>}>
    {/*<Suspense fallback={<div>Загрузка...</div>}>*/}
        <App/>
    </Suspense>,
    document.getElementById('root')
);