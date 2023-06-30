'use client'
import Link from 'next/link'
import React from 'react';
import styles from './navbar.module.css';
import DarkMode from '../darkMode/DarkMode';
import Image from 'next/image';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
   
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Contact",
        url: "/contact",
    },
   
];

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href='/' className={styles.logo} >
                <Image
                className={styles.img}
                width={110}
                height={100}
                    src="https://i.ytimg.com/vi/xW48-56lg04/maxresdefault.jpg"
                    alt='church logo'
                />
            </Link>
            <div className={styles.links}>
                <DarkMode />
                {links.map(link => (<Link key={link.id} href={link.url} className={styles.link}>{link.title}
                </Link>
                ))}
    
            </div>

        </div>
    )
}

export default Navbar