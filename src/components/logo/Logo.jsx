import React from 'react';
import style from './Logo.module.scss'

export function Logo(props) {
    return (
        <a className={style.logo__ref} href="#">
            <img className={style.logo__img}
                 src={props.img}
                 width={props.width}
                 height={props.height}
                 alt="logo"/>
        </a>
    )
}