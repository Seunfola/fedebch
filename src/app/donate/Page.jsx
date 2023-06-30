import React from 'react'
import styles from './page.module.css';
import Button from '@/components/button/Button';

const Donate = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.item}>
        {/* <Button className={styles.btn} text="GIVE" url="#" /> */}
        <h1 className={styles.title}>Help Those In Need</h1>
      </div>
      <div className={styles.item}>
        <p className={styles.desc}>"Whoever is generous to the poor lends to the Lord and he will repay for his deed."</p>
        <span className={styles.verse}> proverb 19:17.</span>
      </div>
    </div>
  )
}

export default Donate