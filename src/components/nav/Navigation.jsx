import React from 'react';
import style from './Navigation.module.scss'

const links = [
    {id: 1, title: 'Blog', href: '#'},
    {id: 2, title: 'About', href: '#about'},
    {id: 3, title: 'Links', href: '#articles'},
    {id: 4, title: 'Projects', href: '#projects'},
]

function NavItem() {
    return (
        links.map(item =>
                <li key={item.id} className={style.navigation__item}>
                    <a className={style.navigation__link} href={item.href}>
                        {item.title}
                    </a>
                </li>
            )
    )

}

export function Navigation() {
    return (
        <ul className={style.navigation}>
            <NavItem/>
        </ul>
    );
}