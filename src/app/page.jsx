import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Welcome To Church.</h1>
        <div className={styles.item}>
        <p className={styles.desc}>Overflowing Peace.<span> Ezekiel 32:25.</span></p>
        
        </div>
        {/* <Button url='/contact' text="See Our Works" /> */}
      </div>
      {/* <div className={styles.item}>
        <Image src='/hero.png' width={500} height={500} alt='hero image' className={styles.img} />
      </div> */}
    </div>
  )
}

