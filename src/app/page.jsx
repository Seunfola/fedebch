import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.disp}>
        <Image src='/cross (1).png' width={200} height={200} alt='hero image' className={styles.img} />
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Welcome To Church.</h1>
        <div className={styles.item}>
          <p className={styles.desc}>Overflowing Peace.</p>
          <p className={styles.content}>I will make a covenant of peace with them, and cause wild beasts to cease from the land; and they will dwell safely in the wilderness and sleep in the woods.<span className={styles.verse}> Ezekiel 32:25.</span></p>
        </div>
        {/* <Button url='/contact' text="See Our Works" /> */}
      </div>
      
    </div>
  )
}

