import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";
import VideoOnScroll from "@/components/videoscrolltrigger";


export default function ProjectDetailPage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Linke Sidebar */}
      <MenuLeft />

      {/* Rechte Sidebar */}
      <MenuRight />

      {/* Project */}
      <main className={styles.mainContent}> 
        <h1 className={styles.normalHeader}>HANGMAN</h1>
        <img
          src="images/hangman/hangman_start.png"
          alt="HANGMAN Start"
          style={{
            width: "1200px",
            height: "700px",
            marginTop: "50px",
            marginLeft: "-100px"
          }}
        />

        <p className={styles.quote} style={{ marginTop: "150px"}}>
            Das Hangman-Spiel sollte als eine Express/Typescript Anwendung umgesetzt werden. 
            Die HTML-Seiten sollten statisch ausgeliefert werden und die Kommunikation mit dem Backend sollte über
            REST-Schnittstellen erfolgen. Das zweiwöchige Projekt sollte in Einzelarbeit durchgeführt werden und 
            knüpfte an ein vorheriges Projekt des Kurses an, in welchen man bereits die grundlagen von Express erlernt hatte.
        </p>

        {/* Define */}
        <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Discover</h2>
        <img
          src="images/hangman/define.png"
          alt="Define"
          style={{
            width: "100%",
            height: "100%",
            marginTop: "50px",
            display: "block",
            objectPosition: "center"
          }}
        />
        <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
            Zu Beginn wurde der Kommunikationsfluss der Website definiert. Dafür wurden zunächst alle benötigten Seiten identifiziert 
            sowie die erforderlichen Schnittstellen und Funktionen für die Umsetzung festgelegt. Das UI-Design wurde anschließend 
            in Figma konzipiert und diente während der Entwicklung als visuelle Orientierung, wodurch der Implementierungsprozess 
            effizienter gestaltet werden konnte. Abschließend wurde entschieden, wie die eingegebenen Wörter strukturiert gespeichert 
            und verwaltet werden sollen.
        </p>

        {/* Develop */}
        <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Develop</h2>
        <VideoOnScroll src="/videos/hangman_website.mp4" />

        {/* Backend */}
        <div className={styles.imageTextContainer}>
          <img
            src="images/hangman/backend.png"
            alt="Backend"
            className={styles.image}
          />
          <div className={styles.textContent}>
          <h1 className={styles.smallHeader}>
            Backend
          </h1>
            <p className={styles.mediumText} style={{ marginTop: "50px"}}>
              Die gesamte Backend-Logik wurde im Ordner src umgesetzt und folgt einer klar strukturierten Express-Architektur 
              mit REST-Schnittstellen. In der index.ts wird das Spiel initialisiert und der Server gestartet. Die definierten 
              Routes stellen die einzelnen API-Endpunkte bereit und leiten Anfragen an die jeweiligen Controller weiter. Während 
              der createController die Verwaltung der Wortliste übernimmt, verarbeitet der gameController die Spielzüge und 
              Benutzereingaben. Die eigentliche Spiellogik von Hangman ist im hangmanModel gekapselt, wodurch eine saubere Trennung 
              zwischen Routing, Anwendungslogik und Spielmechanik gewährleistet wird.
            </p>
          </div>
        </div>

        {/* Frontend */}
        <div className={styles.imageTextContainer}>
          <div className={styles.textContent}>
          <h1 className={styles.smallHeader}>
            Frontend
          </h1>
            <p className={styles.mediumText} style={{ marginTop: "50px"}}>
              Das Frontend wurde gemäß den Aufgabenanforderungen mit statischen HTML-Seiten umgesetzt, wobei für jede Page eine 
              eigene Datei erstellt wurde. Die Gestaltung erfolgt zentral über eine style.css, wodurch ein konsistentes Layout und 
              Design sichergestellt wird. Zusätzlich gibt es einen public-Ordner zur Strukturierung und Bereitstellung statischer 
              Ressourcen. Durch diese klare Trennung von Struktur (HTML), Design (CSS) und Assets bleibt das Frontend übersichtlich 
              und wartbar.
            </p>
          </div>
          <img
            src="images/hangman/frontend.png"
            alt="Frontend"
            className={styles.image}
          />
        </div>

        {/* Link */}
        <p className={styles.normalHeader} style={{ marginTop: "150px"}}>
          Neugierig geworden?<br />
          Hier geht es zum 
        </p>
        <p className={styles.monoHeader}>
          GitHub Repository:
        </p>
        <a
          href="https://github.com/rosalieO/Webtech_Test/tree/main/week05"
          aria-label="Hanga´man github repo" 
          className={styles.socialLink}
        > 
          <img 
            src="/icons/hangman.png"
            alt="hangman icon"
            style={{
              width: "40%",
              height: "40%",
              marginLeft: "500px",
              marginTop: "100px",
              marginBottom: "300px",
            }}
          />
        </a>
      </main>
    </div>
  );
}