import React from 'react'
import style from './Sidebar.module.scss'
import closeIcon from 'assets/image/svg/close_icon.svg'
import {Navigation} from "components/nav/Navigation";

export const Sidebar = ({open, handleClose}) => {

    const sidebarClass = style.sidebar + (open ? ' ' + style.open : '')
    return (
        <>
            {open && <div className={style.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <button className={style.close} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        className={style.closeImg}
                    />
                </button>
                <nav className={style.nav}>
                    <Navigation direction={'column'} padding={'0'}/>
                </nav>
            </aside>
        </>
    )
}