import React from 'react'
import styles from './index.module.scss'

export default function TextAndImage({ data }) {
    return (
        <div className={styles.textAndImageContainer}>
            <img src={data.image} alt=""/>
            <div className={styles.headingAndText}>
                <div className={styles.heading}>
                    {data.heading}
                </div>
                <div className={styles.text}>
                    {data.text}
                </div>
            </div>
        </div>
    )
}