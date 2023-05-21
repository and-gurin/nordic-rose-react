import React from 'react';
import style from './Logo.module.scss'
import {NavLink} from "react-router-dom";

export function Logo(props) {
    return (
        <NavLink className={style.logo__ref} to={'/'}>
            <img className={style.logo__img}
                 src={props.img}
                 width={props.width}
                 height={props.height}
                 alt="logo"/>
        </NavLink>
    )
}