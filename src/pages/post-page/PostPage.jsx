import React from "react";
import {About} from "layouts/about/about";
import {Articles} from "layouts/articles/Articles";
import {Header} from "layouts/header/Header";
import {Footer} from "layouts/footer/Footer";
import {Post} from "layouts/post/Post";
import {Newsletter} from "layouts/newsletter/Newsletter";

export function PostPage() {

    const firstOrder = '1';
    const secondOrder = '2';
    const height = '100%'
    const width = '1080px'

    return (
        <div>
            <Header/>
            <About first={firstOrder} second={secondOrder} height={height}/>
            <Post/>
            <Articles title={'What to read next'} width={width}/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}