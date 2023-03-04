import React from "react";
import resume from '../../assets/images/joinUs/resume.png'
import call from '../../assets/images/joinUs/call.png'
import check from '../../assets/images/joinUs/check.png'
import challenge from '../../assets/images/joinUs/challenge.png'
import interview from '../../assets/images/joinUs/interview.png'
import success from '../../assets/images/joinUs/success.png'
import styles from './index.module.scss';

export default function JoinUs() {
    return (
        <div className={styles.joinUs}>
            <div className={styles.sectionHeading}>
                چگونه همکار ما شوید؟
            </div>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <img src={resume} alt=""/>
                    <div>
                        <span className={styles.number}>1.</span>
                        <span className={styles.title}>ارسال رزومه</span>
                    </div>
                </div>
                <div className={styles.step}>
                    <img src={check} alt=""/>
                    <div>
                        <span className={styles.number}>2.</span>
                        <span className={styles.title}>بررسی اولیه</span>
                    </div>
                </div>
                <div className={styles.step}>
                    <img src={interview} alt=""/>
                    <div>
                        <span className={styles.number}>3.</span>
                        <span className={styles.title}>مصاحبه‌ی اولیه</span>
                    </div>
                </div>
                <div className={styles.step}>
                    <img src={challenge} alt=""/>
                    <div>
                        <span className={styles.number}>4.</span>
                        <span className={styles.title}>ارسال چالش برای شما</span>
                    </div>
                </div>
                <div className={styles.step}>
                    <img src={call} alt=""/>
                    <div>
                        <span className={styles.number}>5.</span>
                        <span className={styles.title}>بررسی و ارائه‌ی
نتیجه‌ی نهایی</span>
                    </div>
                </div>
                <div className={styles.step}>
                    <img src={call} alt=""/>
                    <div>
                        <span className={styles.number}>6.</span>
                        <span className={styles.title}>استخدام شدید!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}