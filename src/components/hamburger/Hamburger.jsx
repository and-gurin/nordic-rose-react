import React from 'react';
import style from './Hamburger.module.scss'

export function Hamburger() {

    return (
        <div className={style.hamburger}>
            {[1, 2, 3].map((item)=><span key={item} className={style.hamburger__line}></span>)}
        </div>
    );
}