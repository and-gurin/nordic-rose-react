import React from "react";
import {About} from "layouts/about/about";
import {Articles} from "layouts/articles/Articles";
import {Header} from "layouts/header/Header";
import {Footer} from "layouts/footer/Footer";
import {Post} from "layouts/post/Post";

export function PostPage() {

    const first = '1';
    const second = '2';
    const height = '100%'

    return (
        <div>
            <Header/>
            <About first={first} second={second} height={height}/>
            <Post/>
            <Articles title={'All articles'}/>
            <Footer/>
        </div>
    );
}