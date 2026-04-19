"use client"; 

import { useState } from "react";
import styles from '@/app/page.module.css';
import Link from "next/link";

export default function MenuLeft() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Der Burger Button - erscheint nur auf Mobile durch CSS */}
            <button 
                className={`${styles.burgerBtn} ${styles.btnLeft}`} 
                onClick={toggleMenu}
                aria-label="Menü öffnen"
            >
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Die Sidebar - bekommt bei isOpen die Klasse menuOpen */}
            <nav className={`${styles.navbarLeft} ${isOpen ? styles.menuOpen : ""}`}>
                <ul className={styles.menuList}>
                    <li className={styles.menuItem} onClick={() => setIsOpen(false)}>
                        <Link href="/">Portfolio</Link>
                    </li>
                </ul>

                <ul className={styles.socialLinks}>
                    <li>
                        <a href="https://gitlab.lrz.de/..." target="_blank" className={styles.socialLink}>      
                            <img src="/icons/gitlab.png" alt="GitLab" className={styles.socialIcon} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/..." target="_blank" className={styles.socialLink}>      
                            <img src="/icons/github.png" alt="GitHub" className={styles.socialIcon} />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}