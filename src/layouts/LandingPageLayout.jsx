import React from 'react'
import styles from './LandingPageLayout.module.scss'

export default function LandingPageLayout({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}