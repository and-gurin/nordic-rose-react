import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom';
import {Header} from "layouts/header/Header";
import {About} from "layouts/about/about";
import {Post} from "layouts/post/Post";
import {Articles} from "layouts/articles/Articles";
import {Newsletter} from "layouts/newsletter/Newsletter";
import {Footer} from "layouts/footer/Footer";
import {ScrollToTop} from "components/scroll-to-top/ScrollToTop";

export function App() {

    const firstOrder = '1';
    const secondOrder = '2';
    const height = '100%';
    const width = '1080px';

    return (
        <HashRouter>
            <ScrollToTop/>
                <Header/>
                <Routes>
                    <Route path='/' element={
                        <>
                            <About/>
                            <Articles title={'All articles'}/>
                        </>
                    }/>
                    <Route path='/posts/*' element={
                        <>
                            <About first={firstOrder} second={secondOrder} height={height}/>
                            <Routes>
                                <Route path='/:id' element={<Post/>}/>
                            </Routes>
                            <Articles title={'What to read next'} width={width}/>
                            <Newsletter/>
                        </>
                    }/>
                    <Route path='/about/' element={
                        <About/>
                    }/>
                    <Route path='/links/' element={
                        <Articles title={'All articles'}/>
                    }/>
                </Routes>
                <Footer/>
        </HashRouter>
    );
}
