import React from 'react';
import author from 'assets/image/jpg/author.jpg'
import {SocialTableFooter, SocialTableHeader} from 'components/social-table/SocialTable';
import style from './Post.module.scss'
import {useEffect, useState} from "react";
import {nordicAPI} from 'api/api';
import {useParams} from 'react-router-dom';
import eyes from 'assets/image/svg/eyes.svg'

export function Post() {
    const params = useParams();
    const postId = params.id;

    const [post, setPost] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        nordicAPI.getPost(postId)
            .then((res) => {
                setPost(res.data);
                setLoading(false)
            })
    }, [postId])

    const options = {day: 'numeric', month: 'long', year: 'numeric',};
    const datetime = !isLoading
        ? new Date(Date.parse(post.created_at)).toLocaleDateString('en-US', options)
        : 'wait';

    const articleLength = !isLoading
        ? Math.round(post.content.replace(/(<([^>]+)>)/ig, '').length / 250)
        : 'few'

    const tags = !isLoading
        ? post.all_tags_list.map(tag => <a key={tag} className={style.tags__ref} href="#">{'  ' + tag}</a>)
        : 'wait';

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
                                <time>{datetime + ' '}</time>
                                · {' ' + articleLength + ' '} min read
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
                    <source media="(max-width: 859px)" srcSet={post.thumbnail_url}/>
                    <source media="(min-width: 860px)" srcSet={post.thumbnail_url}/>
                    <img src={post.thumbnail_url} alt="post"/>
                </picture>
                <figcaption className={style.post__figcaption}>
                    {post.title}
                </figcaption>
            </figure>
            <div className={style.footerTableWrapper}>
                <SocialTableFooter/>
            </div>
            <div className={style.tags}>
                Tags: {tags}
            </div>
            <div className={style.author__wrapper_footer}>
                <div >
                    <img className={style.author__img_footer} src={author} alt="author" width="56"
                         height="56"/>
                    <span className={style.author__name_footer}>
                        Andrei Hurynovich&nbsp;
                    </span>
                    <span className={style.author__description_footer}>
                        is a Front-end developer with a passion of art, current stack includes: react, redux, typescript REST Api.
                        Current art stack: modern, romanticism, golden age. Nordic Rose stakeholder.
                    </span>
                </div>
            </div>
            <img className={style.post__eyes} width='52' height='65' src={eyes} alt="eyes"/>
        </section>
    )
}