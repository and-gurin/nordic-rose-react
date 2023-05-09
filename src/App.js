import React from 'react';
import {MainPage} from 'pages/main-page/MainPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Header} from "layouts/header/Header";
import {About} from "layouts/about/about";
import {Post} from "layouts/post/Post";
import {Articles} from "layouts/articles/Articles";
import {Newsletter} from "layouts/newsletter/Newsletter";
import {Footer} from "layouts/footer/Footer";

export function App() {

    const firstOrder = '1';
    const secondOrder = '2';
    const height = '100%'
    const width = '1080px'

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/posts/*' element={
                    <>
                        <Header/>
                        <About first={firstOrder} second={secondOrder} height={height}/>
                        <Routes>
                            <Route path='/:id' element={<Post/>}/>
                        </Routes>
                        <Articles title={'What to read next'} width={width}/>
                        <Newsletter/>
                        <Footer/>
                    </>
                }/>
            </Routes>
        </BrowserRouter>
);
}
