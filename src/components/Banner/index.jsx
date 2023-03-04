import React from 'react'
import banner from '../../assets/images/banner/banner.png'
import leftUp from '../../assets/images/arrows/left-up.png'

import styles from './index.module.scss'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.arrow}>
                <img src={leftUp} alt=""/>
            </div>
            <img src={banner} alt="banner" className={styles.bannerImage}/>
        </div>
    )
}