import React, {useState} from 'react';
import styles from './index.module.scss'
import JobBox from "./includes/JobBox";

export default function Jobs() {
    const [selectedPosition, setSelectedPosition] = useState(0)
    const [selectedJob, setSelectedJob] = useState(0)

    const positions = {
        all: 'همه',
        development: 'برنامه نویسی',
        digitalMarketing: 'دیجیتال مارکتینگ',
        accounting: 'حسابداری',
        sales: 'فروش',
        others: 'سایر',
    }
    const jobs = {
        development: [
            {
                title: 'PHP Developer',
                position: 'برنامه نویسی',
                open: 1,
            },
            {
                title: 'Android Developer',
                position: 'برنامه نویسی',
                open: 1,
            },
        ],
        digitalMarketing: [
            {
                title: 'Copywriter',
                position: 'دیجیتال مارکتینگ',
                open: 1,
            },
            {
                title: 'کارشناس دیجیتال مارکتینگ',
                position: 'دیجیتال مارکتینگ',
                open: 1,
            },
            {
                title: 'سئو مستر به زبان عربی',
                position: 'دیجیتال مارکتینگ',
                open: 1,
            },
        ],
        accounting: [
            {
                title: 'کارشناس امور ارزی',
                position: 'حسابداری',
                open: 1,
            },
        ],
        sales: [
            {
                title: 'کارشناس امور مشتریان',
                position: 'فروش',
                open: 1,
            },
        ],
        others: [
            {
                title: 'آبدارچی و نظافت',
                position: 'سایر',
                open: 1,
            }
        ]
    }

    return (
        <div className={styles.jobs}>
            <div className={styles.sectionHeading}>
                موقعیت های شغلی
            </div>
            <div className={styles.positions}>
                {Object.entries(positions).map(position => (
                    <button className={styles.button}>
                        {position[1]}
                    </button>
                ))}
            </div>
            <div className={styles.jobItems}>
                {Object.entries(jobs).map(job => {
                    return job[1].map(item => (
                        <JobBox job={item} />
                    ))
                })}
            </div>
        </div>
    )
}