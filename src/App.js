import React from 'react';
import {MainPage} from 'pages/main-page/MainPage';
import {PostPage} from 'pages/post-page/PostPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/posts/:id' element={<PostPage/>}/>
            </Routes>
        </BrowserRouter>

);
}
