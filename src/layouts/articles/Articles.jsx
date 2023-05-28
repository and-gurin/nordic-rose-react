import React, {useEffect, useState} from 'react';
import styles from './Articles.module.scss';
import {NavLink, useSearchParams} from "react-router-dom";
import {nordicAPI} from "api/api";
import {Pagination} from "components/pagination/Pagination";
import stylePost from 'layouts/post/Post.module.scss'

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

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const pageSize = 10;
    const [pageCount, setPageCount] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()
    const [tag, setTag] = useState(null)

    const allTags = ['Leighton', 'England', 'historical', 'Hoch', 'Holland', 'Klimt', 'Austria', 'landscape','portrait', 'erotic', 'mythology']
    const tags = allTags.map(tag => <a key={tag}
                                onClick={(e)=>handleTagClick(e)}
                                className={stylePost.tags__ref}
                                href="#">{tag}
        </a>
    )

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
        sendQuery(page, pageSize, newtTag);
        setSearchParams({page: String(1), tag: newtTag});
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery(params.page, pageSize, params.tag);
        setPage(+params.page || 1)
        setTag(+params.tag || null)
    }, [])

    return (
        <section id="articles" className={`${styles.articles} ${styles.articles_mainPage}`}>
            <div className={styles.articles__container}>
                <h2 className={styles.articles__title}>
                    {props.title}
                </h2>
                <div  style={{borderBottom: 'none'}} className={stylePost.tags}>
                    Tags:&nbsp;&nbsp;
                    <a onClick={() => sendQuery(page, pageSize, null)}
                       className={stylePost.tags__ref}
                       href="#">{'ALL'}
                    </a>
                    {tags}
                </div>
                <div className={styles.articles__cards} style={{maxWidth: props.width}}>
                    {posts.map(post =>
                        <Article {...post} key={post.id}/>
                    )}
                </div>
                <div className={styles.articles__pagination}>
                    <Pagination pageCount={pageCount} page={page - 1} onChange={(e) => handlePageClick(e)}/>
                </div>
            </div>
        </section>
    );
};

