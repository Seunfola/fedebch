import React from 'react';
import styles from './page.module.css';


const Gallery = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sermon Videos Gallery</h1>
      <div class="bg">
        <div className={styles.wrapper}>
          <div class={styles.card}><h2>Card</h2></div>
          <div class={styles.card}><h2>Card</h2></div>
          <div class={styles.card}><h2>Card</h2></div>
          <div class={styles.card}><h2>Card</h2></div>
          <div class={styles.card}><h2>Card</h2></div>
          <div class={styles.card}><h2>Card</h2></div>
          <div class={styles.card}><h2>Card</h2></div>
          <div class={styles.card}><h2>Card</h2></div>
          <div class={styles.card}><h2>Card</h2></div>
        </div>
      </div>
    </div>
  )
}

export default Gallery