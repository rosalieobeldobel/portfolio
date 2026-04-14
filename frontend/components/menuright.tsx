"use client"; // Wichtig für den State!

import { useState } from "react";
import styles from '@/app/page.module.css';
import Link from "next/link";

export default function MenuRight() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Burger Button Rechts */}
            <button 
                className={`${styles.burgerBtn} ${styles.btnRight}`} 
                onClick={toggleMenu}
                aria-label="Menü öffnen"
            >
                {isOpen ? "✕" : "☰"}
            </button>

            <nav className={`${styles.navbarRight} ${isOpen ? styles.menuOpen : ""}`}>
                <ul className={styles.menuList}>
                    <li className={styles.menuItem} onClick={() => setIsOpen(false)}>
                        <Link href="/aboutme">Über Mich</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => setIsOpen(false)}>
                        <Link href="/projects">Projekte</Link>
                    </li>
                </ul>
                <div /> 
            </nav>
        </>
    );
}