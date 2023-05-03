import React from 'react';
import style from 'components/social-table/SocialTable.module.scss'
import facebook from 'assets/image/svg/facebook.svg'
import twitter from 'assets/image/svg/twitter.svg'
import whatsapp from 'assets/image/svg/whatsapp.svg'

export function SocialTableThreeColumn() {
    return (
        <table className={style.socialTable}>
            <tbody>
            <tr>
                <td className={style.socialTable__row}>
                    <a className={style.socialTable__ref} href="#">
                        <img src={facebook} alt="facebook" width="20px" height="20px"/>
                    </a>
                </td>
                <td className={style.socialTable__row}>
                    <a className={style.socialTable__ref} href="#">
                        <img src={twitter} alt="twitter" width="20px" height="20px"/>
                    </a>
                </td>
                <td className={style.socialTable__row}>
                    <a className={style.socialTable__ref} href="#">
                        <img src={whatsapp} alt="whatsapp" width="20px" height="20px"/>
                    </a>
                </td>
            </tr>
            </tbody>
        </table>
    )
}
