import React from 'react';
import style from './about.module.scss'
import about_image_large from '../../assets/image/svg/about_image-854w.svg'

export function About() {

    return (
        <section id="about" className={style.about}>
            <img className={style.about__image} src={about_image_large} alt="about"/>
                <div className={style.about__container}>
                    <h1 className={style.about__title}>
                        A few words about this blog platform, Ghost, and how this site was made
                    </h1>
                    <p className={style.about__subtitle}>
                        Why Ghost (& Figma) instead of Medium, WordPress or other options?
                    </p>
                </div>
        </section>
    )
}