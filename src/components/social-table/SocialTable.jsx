import React from 'react';
import style from 'components/social-table/SocialTable.module.scss'
import facebookImg from 'assets/image/svg/facebook.svg'
import twitterImg from 'assets/image/svg/twitter.svg'
import whatsappImg from 'assets/image/svg/whatsapp.svg'

const socialLinks = [
    {name: 'facebook', img: facebookImg, caption: 'Share on Facebook'},
    {name: 'twitter', img: twitterImg, caption: 'Share on Twitter'},
    {name: 'whatsapp', img: whatsappImg, caption: ''},
]


export function SocialTableHeader() {
    return (
        <table className={style.socialTable}>
            <tbody>
            <tr>
                {socialLinks.map(link => {
                        return (
                            <td key={link.name} className={style[link.name] + ' ' + style.socialTable__row}>
                                <a className={style.socialTable__ref} href="#">
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
    return (
        <table className={style.socialTable}>
            <tbody>
            <tr>
                {socialLinks.map(link => {
                        return (
                            <td key={link.name} className={style[link.name] + ' ' + style.socialTable__row}>
                                <a className={style.socialTable__ref} href="#">
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