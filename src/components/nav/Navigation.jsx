import React from 'react';
import style from './Navigation.module.scss'

export function Navigation() {

    return (
        <ul className={style.navigation}>
            <li className={style.navigation__item}>
                <a className={style.navigation__link} href="#">
                    Blog
                </a>
            </li>
            <li className={style.navigation__item}>
                <a className={style.navigation__link} href="#">
                    About
                </a>
            </li>
            <li className={style.navigation__item}>
                <a className={style.navigation__link} href="#">
                    Links
                </a>
            </li>
            <li className={style.navigation__item}>
                <a className={style.navigation__link} href="#">
                    Projects
                </a>
            </li>
        </ul>
    );
}