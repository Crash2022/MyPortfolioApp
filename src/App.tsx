import React from 'react'
import './App.css'
import {Header} from "./components/Header/Header"
import {Main} from "./components/Main/00_Main/Main"
import {Footer} from "./components/Footer/Footer";
import {TopButton} from "./common/components/TopButton";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
            {/*<TopButton/>*/}
        </div>
    );
}