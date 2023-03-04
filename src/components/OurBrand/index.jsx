import styles from './index.module.scss'
import {data} from "./data";
import React from "react";

export default function OurBrand() {
    return (
        <div className={styles.ourBrand}>
            <div className={styles.sectionHeading}>
                ارزش‌های ما
            </div>
            <div className={styles.values}>
                {data.map(value => (
                    <div className={styles.value}>
                        <img src={value.icon} alt=""  style={{
                            boxShadow: `5px 10px ${value.color}`,
                            borderRadius: 8
                        }} />
                        <div className={styles.title}>
                            {value.title}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.joinTeam}>
                <button className={styles.mainButton}>
                    همکار ما شو
                </button>
            </div>
        </div>
    )
}