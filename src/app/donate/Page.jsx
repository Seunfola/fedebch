import React from 'react'
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';
const Donate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image src="/donation.png" width={65} height={65} className={styles.icon} alt='facebook' />
        <Image src="/pray.png" width={65} height={65} className={styles.icon} alt='insta' />
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Help Those In Need</h1>
      </div>
      <div className={styles.item}>
        <p className={styles.desc}>"Whoever is generous to the poor lends to the Lord and he will repay for his deed."</p>
        <span className={styles.verse}> proverb 19:17.</span>
      </div>
      <div className={styles.item}>
        <Button className={styles.btn} text="Donate" url="#" /> 
      </div>
    </div>
  )
}

export default Donate