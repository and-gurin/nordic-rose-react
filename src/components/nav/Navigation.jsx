import React from 'react';
import style from './Navigation.module.scss'

export function Navigation() {
    const links = [
        {title: 'Blog', href: '#'},
        {title: 'About', href: '#about'},
        {title: 'Links', href: '#links'},
        {title: 'Projects', href: '#projects'},
    ]

    return (

        <ul className={style.navigation}>
            {links.map(m =>
                <li className={style.navigation__item}>
                    <a className={style.navigation__link} href={m.href}>
                        {m.title}
                    </a>
                </li>
            )}
        </ul>
    );
}