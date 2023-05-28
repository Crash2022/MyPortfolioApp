import React from 'react'
import './App.css'
import {Header} from "./features/Header/Header"
import {Main} from "./features/Main/00_Main/Main"
import {Footer} from "./features/Footer/Footer"

// https://my-portfolio-app-beryl.vercel.app/

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}