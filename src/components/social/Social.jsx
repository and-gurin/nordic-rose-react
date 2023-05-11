import React from 'react';
import style from './Social.module.scss'

const links = [
    {id: 1, title: 'Telegram', href: 'https://t.me/and_gurin'},
    {id: 2, title: 'Linkedin', href: 'https://www.linkedin.com/in/and-gurin/'},
    {id: 3, title: 'Instagram', href: 'https://www.instagram.com/and_gurin/'},
]

export const Social = () => {
    return (
        links.map(item =>
            <div  key={item.id}>
                <a rel='noreferrer'
                   target='_blank'
                   className={style.socialLink}
                   href={item.href}>{item.title}
                </a>
            </div>
        )
    );
};