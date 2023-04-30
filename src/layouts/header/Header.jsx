import React from 'react';
import style from './Header.module.scss'
import {Logo} from '../../components/logo/Logo';
import logo_dark from '../../assets/image/svg/nordic_rose_logo_dark.svg'
import {Navigation} from "../../components/nav/Navigation";
import {Hamburger} from "../../components/hamburger/Hamburger";

export function Header() {
    const width = 217;
    const height = 20;

    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__logo}>
                    <Logo img={logo_dark} width={width} height={height}/>
                </div>
                <div className={style.header__hamburger}>
                    <Hamburger/>
                </div>
                <nav className={style.header__navigation}>
                    <Navigation/>
                </nav>
            </div>
        </header>
    );
}