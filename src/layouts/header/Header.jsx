import React, {useEffect, useState} from 'react';
import style from './Header.module.scss'
import {Logo} from 'components/logo/Logo';
import logo_dark from 'assets/image/svg/nordic_rose_logo_dark.svg'
import {Navigation} from 'components/nav/Navigation';
import {Sidebar} from 'components/burger/Sidebar';
import burger_icon from 'assets/image/svg/burger.svg'

export function Header() {
    const width = 217;
    const height = 20;

    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open])

    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__logo}>
                    <Logo img={logo_dark} width={width} height={height}/>
                </div>
                <img
                    src={burger_icon}
                    className={style.header__burger}
                    onClick={handleOpen}
                    alt={'open menu'}
                />
                <Sidebar open={open} handleClose={handleClose}/>
                <nav className={style.header__navigation}>
                    <Navigation/>
                </nav>
            </div>
        </header>
    );
}