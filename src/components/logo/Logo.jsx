import React from 'react';
import style from './Logo.module.scss'
import {Link} from "react-router-dom";

export function Logo(props) {
    return (
        <Link className={style.logo__ref} to={'/'}>
            <img className={style.logo__img}
                 src={props.img}
                 width={props.width}
                 height={props.height}
                 alt="logo"/>
        </Link>
    )
}