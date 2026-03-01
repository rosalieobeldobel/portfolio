import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";

export default function ProjectDetailPage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Linke Sidebar */}
      <MenuLeft />

      {/* Rechte Sidebar */}
      <MenuRight />

      {/* Project */}
      <main className={styles.mainContent}> 
        <h1 className={styles.normalHeader}>Hikikomori</h1>
        <img
          src="images/hikikomori/poster.jpg"
          alt="Hikikomori Start"
          style={{
            width: "1200px",
            height: "700px",
            marginTop: "50px",
            marginLeft: "-100px"
          }}
        />
        <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Discover</h2>
        <img
          src="images/hikikomori/discover.png"
          alt="Hikikomori Start"
          style={{
            width: "100%",
            height: "100%",
            marginTop: "50px",
            display: "block",
            objectPosition: "center"
          }}
        />
        <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
            Das Abschlussprojekt des Kurses ... war eine Datenvisualisierung zu einem globalen Thema. Optional konnte KI für die Generierung der Visualisierungen verwendet werden.
            Das Projekt hatte eine Zeitspanne von 6 Wochen und wurde in Gruppen von 2-3 Personen durchgeführt. Die Gruppe Hikikomorie bestand aus den Mitgliedern Polina Sippl, Gloria ... und Rosalie Obeldobel. 
            Thematik der ersten Phase war "Discover". In dieser Phase sollte man sich einen allgemeinen Überblick über mögliche Themen verschaffen. Die möglichen Themen wurden durch Brainstorming zusammengetragen, 
            technische Möglichkeiten der Visualisierung von Daten wurden recherchiert, sowie existierende Datensätze, die man verwenden könnte vermerkt. 
          </p>

        <div className={styles.imageTextContainer}>
            <img
          src="images/hikikomori/define.png"
          alt="Über Mich Informatik"
          className={styles.image}
          />
          <div className={styles.textContent}>
            <h1 className={styles.normalHeader}>
              Define
            </h1>
            <p className={styles.mediumText}>
              Aus allen Themenfeldern, die beim brainstorming zusammengetragen wurden, wurde die Auswahl zuerst auf drei Themen reduziert. Diese Themen waren "Menatl Health & Death", "Mental Health & Economy" und 
              "Mental Health & Social Media". Die Entscheidung viel auf das Thema "Mental Health & Social Media", da viele Menschen viele Menschen davon betroffen sind und es als wichtig empfunden wurde auf dieses Problem 
              durch das Projekt aufmerksam zu machen. 
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
