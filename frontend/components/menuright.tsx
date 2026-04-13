// Author: Rosalie Obeldobel
import styles from '@/app/page.module.css';
import Link from "next/link";

export default function MenuRight() {
  return (
    <nav className={styles.navbarRight}>
      {/* Navigation oben */}
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link href="/aboutme">Über Mich</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/projects">Projekte</Link>
        </li>
      </ul>

      {/* Platzhalter für unten, damit die Flexbox-Ausrichtung (justify-content: space-between) 
          konsistent zur linken Seite bleibt, falls du später noch etwas hinzufügen willst */}
      <div /> 
    </nav>
  );
}