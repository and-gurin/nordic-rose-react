import React from 'react';
import style from './Newsletter.module.scss'

export function Newsletter ()  {
    return (
        <section className={style.newsletter}>
            <h5 className={style.newsletter__title}>
                Sign up for the newsletter
            </h5>
            <p className={style.newsletter__subtitle}>
                If you want relevant updates occasionally, sign up for the private newsletter. Your email is never
                shared.
            </p>
            <form className={style.newsletter__form}>
                <input className={style.newsletter__input} type="text" placeholder="Enter your email..."/>
                    <button className={style.newsletter__button} type="submit">Sign Up</button>
            </form>
        </section>
    );
}