import React from 'react';
import styles from './page.module.css'

const Activities = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Upcoming Events</h1>
                <div className={styles.activities}>
                    <div className={styles.date}>
                        <p>13<br />July </p>
                    </div>
                    <div className={styles.value} >
                        <p>Community <br />Day</p>
                        <p>09:00am - <br />12:00pm</p>
                        <p>Fesbach <br />Lagos</p>
                    </div>
                </div>
                <div className={styles.activities}>
                    <div className={styles.date}>
                        <p>13<br />July </p>
                    </div>
                    <div className={styles.value} >
                        <p>Community <br />Day</p>
                        <p>09:00am - <br />12:00pm</p>
                        <p>Fesbach <br />Lagos</p>
                    </div>
                </div>
                <div className={styles.activities}>
                    <div className={styles.date}>
                        <p>13<br />July </p>
                    </div>
                    <div className={styles.value} >
                        <p>Community <br />Day</p>
                        <p>09:00am - <br />12:00pm</p>
                        <p>Fesbach <br />Lagos</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Activities