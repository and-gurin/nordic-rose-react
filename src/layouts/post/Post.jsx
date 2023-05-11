import React from 'react';
import author from 'assets/image/jpg/author.jpg'
import {SocialTableFooter, SocialTableHeader} from 'components/social-table/SocialTable';
import style from './Post.module.scss'
import posImageSmall from 'assets/image/jpg/post-img-375w.jpg'
import posImageLarge from 'assets/image/jpg/post-img-854w.jpg'
import {useEffect, useState} from "react";
import {nordicAPI} from "api/api";
import {useParams} from "react-router-dom";

export function Post() {
    const params = useParams();
    const postId = params.id;

    const [post, setPost] = useState({})


    useEffect(() => {
        nordicAPI.getPost(postId)
            .then((res) => {
                setPost(res.data);
            })
    }, [postId])

    const options = {day: 'numeric', month: 'long', year: 'numeric',};
    const setDatetime = post.created_at
        ? new Date(Date.parse(post.created_at)).toLocaleDateString('en-US', options)
        : 'wait';

    const setArticleLength = post.content
        ? Math.round(post.content.replace(/(<([^>]+)>)/ig, '').length / 250)
        : 'few'

    return (
        <section className={style.post}>
            <div className={style.authorSocialWrapper}>
                <div className={style.author__wrapper_header}>
                    <div className={style.author}>
                        <img className={style.author__img_header} src={author} alt="author" width="56"
                             height="56"/>
                        <div>
                            <p className={style.author__name_header}>
                                Andrei Hurynovich
                            </p>
                            <p className={style.author__description_header}>
                                <time>{setDatetime + ' '}</time>
                                · {' ' + setArticleLength + ' '} min read
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.headerTableWrapper}>
                    <SocialTableHeader/>
                </div>
            </div>
            <div
                className={style.post__body}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <figure className={style.post__figure}>
                <picture>
                    <source media="(max-width: 859px)" srcSet={posImageSmall}/>
                    <source media="(min-width: 860px)" srcSet={posImageLarge}/>
                    <img src={posImageLarge} alt="post"/>
                </picture>
                <figcaption className={style.post__figcaption}>
                    Image caption centered this way and I’ll make this a bit longer to indicate the amount of
                    line-height.
                </figcaption>
            </figure>
            <div className={style.footerTableWrapper}>
                <SocialTableFooter/>
            </div>
            <div className={style.tags}>
                Tags:
                <a className={style.tags__ref} href="#">product design</a>
                <a className={style.tags__ref} href="#">culture</a>
            </div>
            <div className={style.author__wrapper_footer}>
                <div className="author">
                    <img className={style.author__img_footer} src={author} alt="author" width="56"
                         height="56"/>
                    <span className={style.author__name_footer}>
                        Mika Matikainen
                    </span>
                    <span className={style.author__description_footer}>
                        is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.
                    </span>

                </div>
            </div>
        </section>
    )
}