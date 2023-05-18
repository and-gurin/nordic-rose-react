import React from 'react';
import style from 'components/social-table/SocialTable.module.scss'
import facebookImg from 'assets/image/svg/facebook.svg'
import twitterImg from 'assets/image/svg/twitter.svg'
import whatsappImg from 'assets/image/svg/whatsapp.svg'

const socialLinks = [
    {
        name: 'facebook',
        img: facebookImg,
        caption: 'Share on Facebook',
        hrefShare:`https://www.facebook.com/sharer/sharer.php?u=`,
        href: 'https://www.facebook.com/andrei.hurynovich.18'
    },
    {
        name: 'twitter',
        img: twitterImg,
        caption: 'Share on Twitter',
        hrefShare: `https://twitter.com/share?text=Im Sharing on Twitter&url=`,
        href: 'https://twitter.com/and_gurin'
    },
    {
        name: 'whatsapp',
        img: whatsappImg,
        caption: '',
        hrefShare: '',
        href: ''
    },
]




export function SocialTableHeader() {
    return (
        <table className={style.socialTable}>
            <tbody>
            <tr>
                {socialLinks.map(link => {
                        return (
                            <td key={link.name} className={style[link.name] + ' ' + style.socialTable__row}>
                                <a rel='noreferrer'
                                   target='_blank'
                                   className={style.socialTable__ref}
                                   href={link.href}>
                                    <img src={link.img} alt={link.name} width="20px" height="20px"/>
                                </a>
                            </td>
                        )
                    }
                )}
            </tr>
            </tbody>
        </table>
    )
}

export function SocialTableFooter() {

    const currentUrl = window.location.href;

    return (
        <table className={style.socialTable}>
            <tbody>
            <tr>
                {socialLinks.map(link => {
                    const href = link.hrefShare ? `${link.hrefShare}${currentUrl}` : '';
                        return (
                            <td key={link.name} className={style[link.name] + ' ' + style.socialTable__row}>
                                <a rel='noreferrer'
                                   target='_blank'
                                   className={style.socialTable__ref}
                                   href={href}>
                                    <img src={link.img} alt={link.name} width="20px" height="20px"/>
                                    <span className={style.socialTable__caption}>{'    ' + link.caption}</span>
                                </a>
                            </td>
                        )
                    }
                )}
            </tr>
            </tbody>
        </table>

    )
}