import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Contact from '@/app/contact/Page';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.foot}>FESBCH</div>
                <div className={styles.foot}>federalstatebaptistchurch@gmail.com</div>
                <div className={styles.foot}>08077735665, 08023264757</div>
                <div className={styles.foot}>24/27, Abesan Estater Rd, 3rd Avenue Greenland Junction Jakande Estate, Abesan, Ipaja, Lagos.</div>
                <div className={styles.foot}>P.O Box 157, Ipaja, Lagos.</div>

                <div className={styles.social}>
                    <Image src="/1.png" width={15} height={15} className={styles.icon} alt='facebook' />
                    <Image src="/2.png" width={15} height={15} className={styles.icon} alt='insta' />
                    <Image src="/3.png" width={15} height={15} className={styles.icon} alt='twitter' />
                    <Image src="/4.png" width={15} height={15} className={styles.icon} alt='google' />
                </div>
                <div className={styles.copyright}> @2023 Fesbach. All rights reserved.</div>
            </div>
            <div>
                {<Contact/>}
            </div>
        </div>
    )
}

export default Footer