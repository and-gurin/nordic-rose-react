import React from "react";
import style from './Logo.module.scss'

export function Logo(props) {
    return (
        <a className={style.logo__ref} href="#">
            <img className={style.logo__img} src={props.img} alt="logo"/>
        </a>
    )
}