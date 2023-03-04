import React from "react";
import zarinpal from '../../assets/images/footer/zarinpal.png'
import web from '../../assets/images/footer/web.png'
import khalaghiat from '../../assets/images/footer/khalaghiat.png'
import instagram from '../../assets/images/footer/contact/Instagram.svg'
import youtube from '../../assets/images/footer/contact/youtube.svg'
import telegram from '../../assets/images/footer/contact/Telegram.svg'
import twitter from '../../assets/images/footer/contact/Twitter.svg'
import whatsapp from '../../assets/images/footer/contact/whatsapp.svg'

import styles from './index.module.scss'

export default function Footer() {
    const contact = [
        twitter,
        instagram,
        youtube,
        telegram,
        whatsapp,
    ]

    return (
        <div>
            <div className={styles.background}>
                <img src="/images/logo/main-logo.png" alt="logo"/>
            </div>
            <div className={styles.footerWrapper}>
                <div className={styles.rightContent}>
                    <div className={styles.address}>
                        آدرس : تهران - امانیه - خیابان افق - پلاک ۲۷ - واحد ۷
                    </div>
                    <div className={styles.email}>
                        پست الکترونیکی: info@zimapay.com
                    </div>
                    <div className={styles.phone}>
                        شماره تماس: ۰۲۱۲۲۰۵۱۶۷۹ - ۰۲۱۹۱۳۰۰۰۸۱
                    </div>

                    <div className={styles.contactIcons}>
                        {contact.map(icon => (
                            <img src={icon} alt=""/>
                        ))}
                    </div>
                </div>

                <div className={styles.leftContent}>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            بیشتر بدانید
                        </div>
                        <ul>
                            <li>
                                قوانین و مقررات
                            </li>
                            <li>
                                سوالات متداول
                            </li>
                            <li>
                                دانشنامه زیماپی
                            </li>
                            <li>
                                بلاگ
                            </li>
                        </ul>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.title}>
                            با ما همراه باشید
                        </div>
                        <ul>
                            <li>
                                تماس با ما
                            </li>
                            <li>
                                فرصت‌های شغلی
                            </li>
                            <li>
                                باشگاه مشتریان
                            </li>
                            <li>
                                زیماپی در رسانه‌ها
                            </li>
                            <li>
                                درباره‌ ما
                            </li>
                        </ul>
                    </div>

                    <div className={styles.trustIcons}>
                        <img src={zarinpal} alt=""/>
                        <img src={web} alt=""/>
                        <img src={khalaghiat} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}