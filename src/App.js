import React, {useEffect, useState} from 'react'
import {Route, Routes, useSearchParams} from 'react-router-dom';
import {Header} from "layouts/header/Header";
import {About} from "layouts/about/about";
import {Post} from "layouts/post/Post";
import {Article, Articles} from "layouts/articles/Articles";
import {Newsletter} from "layouts/newsletter/Newsletter";
import {Footer} from "layouts/footer/Footer";
import {ScrollToTop} from "components/scroll-to-top/ScrollToTop";
import {nordicAPI} from "api/api";

export function App() {

    const firstOrder = '1';
    const secondOrder = '2';
    const height = '100%';
    const width = '1080px';

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const pageSize = 10;
    const [pageCount, setPageCount] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()
    const [tag, setTag] = useState('')


    const sendQuery = (page, pageSize, tag) => {
        nordicAPI.getPosts(page, pageSize, tag)
            .then((res) => {
                if (res) {
                    setPageCount(Math.ceil(res.data.total_pages));
                    setPosts(res.data.posts);
                }
            })
    }

    const handlePageClick = (e) => {
        const newPage = (e.selected * pageSize) % pageCount + 1;

        setPage(newPage);

        sendQuery(newPage, pageSize, tag)
        setSearchParams({page: String(newPage), tag})
    };

    const handleTagClick = (e) => {
        const newtTag = '&tag=' + e.target.innerText;
        setTag(newtTag);
        setPage(1);
        sendQuery(1, pageSize, newtTag);
        setSearchParams({page: String(1), tag: newtTag});
        console.log(newtTag)
        console.log(tag)
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery(params.page, pageSize, tag);
        setPage(+params.page || 1)
        setTag(params.tag || '')
        console.log(params.page)
    }, [])

    const allPosts = posts.map(post => <Article {...post} key={post.id}/>)

    return (
        <>
            <Header/>
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={
                    <>
                        <About/>
                        <Articles title={'All articles'}
                                  handlePageClick={handlePageClick}
                                  posts={allPosts}
                                  page={1}
                                  pageCount={pageCount}/>
                    </>
                }/>
                <Route path='/posts/*' element={
                    <>
                        <About first={firstOrder} second={secondOrder} height={height}/>
                        <Routes>
                            <Route path='/:id' element={<Post handleTagClick={handleTagClick}/>}/>
                        </Routes>
                        <Articles handlePageClick={handlePageClick}
                                  posts={allPosts}
                                  page={1}
                                  pageCount={pageCount}
                                  title={'What to read next'}
                                  width={width}/>
                        <Newsletter/>
                    </>
                }/>
                <Route path='/about/' element={
                    <About/>
                }/>
                <Route path='/links/*' element={
                    <Articles title={'All articles'}
                              handlePageClick={handlePageClick}
                              posts={allPosts}
                              page={page}
                              pageCount={pageCount}/>
                }/>
            </Routes>
            <Footer/>
        </>
    );
}
