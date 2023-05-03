import React from 'react';
import styles from './Articles.module.scss';
import article_1_small from 'assets/image/articles/article-1-304w.png';
import article_2_small from 'assets/image/articles/article-2-304w.png';
import article_3_small from 'assets/image/articles/article-3-304w.png';
import article_4_small from 'assets/image/articles/article-4-304w.png';
import article_1_large from 'assets/image/articles/article-1-335w.png';
import article_2_large from 'assets/image/articles/article-2-335w.png';
import article_3_large from 'assets/image/articles/article-3-335w.png';
import article_4_large from 'assets/image/articles/article-4-335w.png';

const cards = [
    {
        id: '1',
        title: 'Here are some things you should know regarding how we work',
        img_small: article_1_small,
        img_large: article_1_large,
        alt: 'article_1'
    },
    {
        id: '2',
        title: 'Here are some things you should know regarding how we work',
        img_small: article_2_small,
        img_large: article_2_large,
        alt: 'article_2'
    },
    {
        id: '3',
        title: 'Here are some things you should know regarding how we work',
        img_small: article_3_small,
        img_large: article_3_large,
        alt: 'article_3'
    },
    {
        id: '4',
        title: 'Here are some things you should know regarding how we work',
        img_small: article_4_small,
        img_large: article_4_large,
        alt: 'article_4'
    },
]

const Article = ({id, title, img_small, img_large, alt}) => {
    return (
        <article className={styles.card} key={id}>
            <picture>
                <source media="(max-width: 859px)" srcSet={img_large}/>
                <source media="(min-width: 860px)" srcSet={img_small}/>
                <img src={img_large} alt={alt}/>
            </picture>
            <h3 className={styles.card__title}>
                {title}
            </h3>
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
                    {cards.map(card=>
                        <Article {...card} key={card.id}/>
                    )}
                </div>
            </div>
        </section>
    );
};