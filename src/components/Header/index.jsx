import React from "react";
import searchIcon from '../../assets/images/header/searchIcon.png'
import lang from '../../assets/images/header/lang.png'
import styles from './index.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <img src="/images/logo/main-logo.png" alt="logo"/>
            </div>

            <div>
                <nav className={styles.navList}>
                    <ul>
                        <li> صفحه اصلی</li>
                        <li>خدمات</li>
                        <li>بلاگ</li>
                        <li>اپلیکیشن</li>
                        <li>درباره‌ ما</li>
                    </ul>
                </nav>
            </div>

            <div className={styles.leftContent}>
                <div className={styles.icons}>
                    <div>
                        <img src={searchIcon} alt=""/>
                    </div>
                    <div>
                        <img src={lang} alt=""/>
                    </div>
                </div>
                <button className={styles.signUp}>
                    پنل کاربری
                </button>
            </div>
        </header>
    )
}