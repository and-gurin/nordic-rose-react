import React from 'react';
import author from 'assets/image/jpg/author.jpg'
import {SocialTableTwoColumn} from 'components/social-table/SocialTableTwoColumn';
import style from './Post.module.scss'
import posImageSmall from 'assets/image/jpg/post-img-375w.jpg'
import posImageLarge from 'assets/image/jpg/post-img-854w.jpg'
import {SocialTableThreeColumn} from "components/social-table/SocialTableThreeColumn";

export function Post() {

    return (
        <section className={style.post}>
            <div className={style.authorSocialWrapper}>
                <div className={style.author__wrapper_header}>
                    <div className={style.author}>
                        <img className={style.author__img_header} src={author} alt="author" width="56"
                             height="56"/>
                        <div>
                            <p className={style.author__name_header}>
                                Mika Matikainen
                            </p>
                            <p className={style.author__description_header}>
                                <time dateTime="2020-04-15">Apr 15, 2020</time>
                                · 4 min read
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.headerTableWrapper}>
                    <SocialTableTwoColumn/>
                </div>
                <div className={style.headerTableWrapper_twoRow}>
                    <SocialTableThreeColumn/>
                </div>
            </div>
            <p className={style.post__body}>
                This lovely web is full of everything which is created I don't know what in mind, considering that
                sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.
            </p>
            <h4 className={style.post__title}>
                Next on the pipeline
            </h4>
            <p className={style.post__body}>
                This lovely web is full of everything which is created I don't know what in mind, considering that
                sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.
            </p>
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
            <p className={style.post__body}>
                This lovely web is full of everything which is created I don't know what in mind, considering that
                sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind it.
                <br/>
                <br/>
                Luckily, in the middle of all that, there are some pockets of content that offer delightfully
                valuable contrast to cursory wisdom in some of the established channels.
            </p>
            <div className={style.footerTableWrapper}>
                <SocialTableTwoColumn/>
            </div>
            <div className={style.footerTableWrapper_twoRow}>
                <SocialTableThreeColumn/>
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