import React from 'react';
import styles from './Articles.module.scss';
import {NavLink} from "react-router-dom";
import {Pagination} from "components/pagination/Pagination";

export const Article = ({id, title, thumbnail_url}) => {

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
    return (
        <section className={`${styles.articles} ${styles.articles_mainPage}`}>
            <div className={styles.articles__container}>
                <h2 className={styles.articles__title}>
                    {props.title}
                </h2>
                <div className={styles.articles__cards} style={{maxWidth: props.width}}>
                    {props.posts}
                </div>
                <div className={styles.articles__pagination}>
                    <Pagination pageCount={props.pageCount} page={props.page - 1} onChange={props.handlePageClick}/>
                </div>
            </div>
        </section>
    );
};

