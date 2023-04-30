import React from "react";
import {About} from "../../layouts/about/about";
import {Articles} from "../../layouts/articles/Articles";
import {Header} from "../../layouts/header/Header";

export function Main() {

    return (
        <div>
            <Header/>
            <About/>
            <Articles title={'All articles'}/>
        </div>
    );
}