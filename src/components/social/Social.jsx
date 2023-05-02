import React from 'react';
import style from './Social.module.scss'

const links = [
    {id: 1, title: 'Twitter', href: '#'},
    {id: 2, title: 'Linkedin', href: '#'},
    {id: 3, title: 'RSS', href: '#'},
]

export const Social = () => {
    return (
        links.map(item =>
            <div  key={item.id}>
                <a className={style.socialLink} href={item.href}>{item.title}</a>
            </div>
        )
    );
};