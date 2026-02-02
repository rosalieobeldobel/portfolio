// Author: Rosalie Obeldobel

import styles from '@/app/page.module.css';
import Link from "next/link";

export default function MenuLeft() {
    return (
        <nav className={styles.navbarLeft}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}><Link href="/">Portfolio</Link></li>
          </ul>

          <ul className={styles.socialLinks}>
            <li>
                <a
                  href="https://github.com/rosalieobeldobel"
                  aria-label="GitHub" 
                  className={styles.socialLink}
                >      
                  <img
                    src="/icons/github.png"
                    alt="GitHub"
                    className={styles.socialIcon}
                  />
                </a>
            </li>
          </ul>
        </nav>
    );
}