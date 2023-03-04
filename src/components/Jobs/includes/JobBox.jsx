import styles from './JobBox.module.scss'

export default function JobBox({ job }) {
    return (
        <div className={styles.jobBox}>
            <div className={styles.title}>
                {job.title}
            </div>
            <div className={styles.position}>
                {job.position}
            </div>
            <div className={styles.open}>
                <span className={styles.count}>
                    {job.open}
                </span>
                {' '}
                <span className={styles.text}>نفر</span>
            </div>
            <div className={styles.link}>
                مشاهده
            </div>
        </div>
    )
}