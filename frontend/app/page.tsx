// Author: Rosalie Obeldobel
import styles from './page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <MenuLeft />
      <MenuRight />

      <main className={styles.mainContent}>
        <div className={styles.heroContainer}>
          
          <div className={styles.imageWrapper}>
            <img
              src="/graphics/pfp.jpeg"
              alt="Rosalie Obeldobel PFP"
              className={styles.pfpImage}
            />
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.designHeader}>Designerin</h1>
            <h1 className={styles.normalHeader}>+</h1>
            <h1 className={styles.monoHeader}>Informatikerin</h1>
            
            <p className={styles.mediumText}>
              Hallo, ich bin eine Studentin im 6. Semester 
              des Studienganges Informatik und Design an der Hochschule für angewandte Wissenschaften - München. 
              <br /><br />
              Der Studiengang entstand aus dem häufigen Kommunikations- und Verständnisproblem zwischen Designer*innen 
              und Informatiker*innen. Durch meine Fähigkeiten in beiden Disziplinen fungiere ich als Schnittstelle, die 
              nutzerzentrierte Gestaltung mit technischer Umsetzung verbindet. Entscheidungen im Prozess treffe ich problemorientiert und unabhängig von 
              persönlichen Präferenzen.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}