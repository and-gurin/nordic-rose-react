import React, {useEffect, useState} from 'react';
import styles from './Articles.module.scss';
import { NavLink} from "react-router-dom";
import {nordicAPI} from "api/api";
import {Pagination} from "components/pagination/Pagination";

const Article = ({id, title, thumbnail_url}) => {

    return (
        <article className={styles.card} key={id}>
            <NavLink className={styles.card__ref} to={'/posts/' + id}>
                <picture>
                    <source media="(max-width: 859px)" srcSet={thumbnail_url}/>
                    <source media="(min-width: 860px)" srcSet={thumbnail_url}/>
                    <img src={thumbnail_url} alt={title}/>
                </picture>
                <h3 className={styles.card__title}>
                    {title}
                </h3>
            </NavLink>
        </article>
    )
}

export const Articles = (props) => {

    const [posts, setPosts] = useState( [])
    const [offset, setOffset] = useState(0);
    const pageSize = 7;
    const [pageCount, setPageCount] = useState(0)

    useEffect(() => {
        nordicAPI.getPosts(offset, pageSize)
            .then((res) => {
                console.log(res)
                setPosts(res.data.posts);
                setPageCount(res.data.total_pages)
            })
    }, [offset])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage+1)
    };

    return (
        <section id="articles" className={`${styles.articles} ${styles.articles_mainPage}`}>
            <div className={styles.articles__container}>
                <h2 className={styles.articles__title}>
                    {props.title}
                </h2>
                <div className={styles.articles__cards} style={{maxWidth: props.width}}>
                    {posts.map(post =>
                        <Article {...post} key={post.id}/>
                    )}
                </div>
                <div className={styles.articles__pagination}>
                    <Pagination pageCount={pageCount} handlePageClick={(e)=>handlePageClick(e)}/>
                </div>
            </div>
        </section>
    );
};

