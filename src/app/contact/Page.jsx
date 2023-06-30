import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Contact Us</h1>
            <div className={styles.content}>
            
                <div className={styles.form}>
                    <input type='text' placeholder='name' className={styles.input} />
                    <input type='text' placeholder='email' className={styles.input} />
                    <textarea className={styles.textArea} placeholder="Message" cols="30" rows="1"></textarea>
                    <Button text="send" url="#" />
                </div>
            </div>
        </div>
    )
}

export default Contact