import React from 'react';
import style from './Hamburger.module.scss'

export function Hamburger() {

    return (
        <div className={style.hamburger}>
            <span className={style.hamburger__line}></span>
            <span className={style.hamburger__line}></span>
            <span className={style.hamburger__line}></span>
        </div>
    );
}