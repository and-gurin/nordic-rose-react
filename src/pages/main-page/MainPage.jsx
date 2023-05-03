import React from "react";
import {About} from "layouts/about/about";
import {Articles} from "layouts/articles/Articles";
import {Header} from "layouts/header/Header";
import {Footer} from "layouts/footer/Footer";

export function MainPage() {

    return (
        <div>
            <Header/>
            <About/>
            <Articles title={'All articles'}/>
            <Footer/>
        </div>
    );
}