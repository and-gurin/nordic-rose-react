import React from 'react';
import style from './Navigation.module.scss'
import {NavLink} from "react-router-dom";

const links = [
    {id: 1, title: 'Blog', href: '/'},
    {id: 2, title: 'About', href: '/about'},
    {id: 3, title: 'Links', href: '/links'},
    {id: 4, title: 'Projects', href: '/'},
]

function NavItem(props) {
    return (
        links.map(item =>
                <li key={item.id} style={{padding: props.padding}} className={style.navigation__item}>
                    <NavLink className={style.navigation__link} to={item.href}>
                        {item.title}
                    </NavLink>
                </li>
            )
    )
}

export function Navigation(props) {
    return (
        <ul className={style.navigation} style={{flexDirection: props.direction}}>
            <NavItem padding={props.padding}/>
        </ul>
    );
}