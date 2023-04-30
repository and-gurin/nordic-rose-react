import React from 'react';
import style from './Footer.module.scss';
import {Logo} from '../../components/logo/Logo';
import logo_light from '../../assets/image/svg/nordic_rose_logo_light.svg'
import {Social} from "../../components/social/Social";

export const Footer = () => {
    const width = 217;
    const height = 20;

    return (
        <footer className={style.footer}>
            <div className={style.footer__string}>
                <span className={style.brightString}>Digital Product Design</span>
                <span className={style.dimString}>Remote Work</span>
                <span className={style.brightString}>UX Design</span>
                <span className={style.dimString}>Distributed Teams</span>
                <span className={style.brightString}>Creativity</span>
                <span className={style.dimString}>Strategy</span>
                <span className={style.brightString}>Suspense</span>
                <span className={style.dimString}>Growth</span>
                <span className={style.brightString}>UX Design</span>
            </div>
            <div className={style.footer__container}>
                <div className={style.footer__logo}>
                    <Logo img={logo_light} width={width} height={height}/>
                </div>
                <p className={style.footer__subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis eu velit tempus erat egestas efficitur.
                    In hac habitasse platea dictumst. Fusce a nunc eget ligula.
                </p>
                <div className={style.footer__social}>
                    <Social/>
                </div>
                <p className={style.copyright}>
                    © 2012 - 2020 Nordic Rose Co.
                </p>
                <p className={style.copyright}>
                    All rights reserved.
                </p>
            </div>

        </footer>
    );
};