// Author: Rosalie Obeldobel
import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";
import VideoOnScroll from "@/components/videoscrolltrigger";

export default function ProjectDetailPage() {
  return (
    <div className={styles.pageWrapper}>
      <MenuLeft />
      <MenuRight />

      <main className={styles.mainContent}> 
        {/* Header Section */}
        <h1 className={styles.normalHeader} style={{ marginTop: "80px" }}>HANGMAN</h1>
        
        <div className={styles.heroImageContainer}>
          <img
            src="images/hangman/hangman_start.png"
            alt="HANGMAN Start"
            className={styles.titleImage}
          />
        </div>

        <p className={styles.titleQuote}>
          Das Hangman-Spiel sollte als eine Express/Typescript Anwendung umgesetzt werden. 
          Die HTML-Seiten sollten statisch ausgeliefert werden und die Kommunikation mit dem Backend sollte über
          REST-Schnittstellen erfolgen. Das zweiwöchige Projekt wurde in Einzelarbeit durchgeführt und 
          knüpfte an ein vorheriges Projekt des Kurses an, in welchen man bereits die Grundlagen von Express erlernt hatte.
        </p>

        {/* Discover Section */}
        <section className={styles.projectSection}>
          <h2 className={styles.normalHeader} style={{ textAlign: 'center' }}>Discover</h2>
          <img
            src="images/hangman/define.png"
            alt="Define"
            className={styles.fullWidthImage}
          />
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "0px" }}>
            Zu Beginn wurde der Kommunikationsfluss der Website definiert. Dafür wurden zunächst alle benötigten Seiten identifiziert,  
            sowie die erforderlichen Schnittstellen und Funktionen für die Umsetzung festgelegt. Das UI-Design wurde anschließend 
            in Figma konzipiert und diente während der Entwicklung als visuelle Orientierung, wodurch der Implementierungsprozess 
            effizienter gestaltet werden konnte. Abschließend wurde entschieden, wie die eingegebenen Wörter strukturiert gespeichert 
            und verwaltet werden sollen.
          </p>
        </section>

        {/* Develop Section */}
        <section className={styles.projectSection} style={{ marginBottom: "-150px" }}>
          <h2 className={styles.normalHeader} style={{ textAlign: 'center' }}>Develop</h2>
          <VideoOnScroll src="/videos/hangman_website.mp4" />
        </section>

        {/* Backend Section */}
        <div className={styles.imageTextContainer} style={{ gap: "0.1rem" }}>
          <img
            src="images/hangman/backend.png"
            alt="Backend"
            className={styles.image}
            style={{ width: "450px" }}
          />
          <div className={styles.textContent} style={{ alignItems: "flex-start" }}>
            <h1 className={styles.smallHeader} style={{ margin: 0 }}>Backend</h1>
            <p className={styles.mediumText}>
              Die gesamte Backend-Logik wurde im Ordner src umgesetzt und folgt einer klar strukturierten Express-Architektur 
              mit REST-Schnittstellen. In der index.ts wird das Spiel initialisiert und der Server gestartet. Die definierten 
              Routes stellen die einzelnen API-Endpunkte bereit und leiten Anfragen an die jeweiligen Controller weiter. Während 
              der createController die Verwaltung der Wortliste übernimmt, verarbeitet der gameController die Spielzüge und 
              Benutzereingaben. Die eigentliche Spiellogik von Hangman ist im hangmanModel gekapselt, wodurch eine saubere Trennung 
              zwischen Routing, Anwendungslogik und Spielmechanik gewährleistet wird.
            </p>
          </div>
        </div>

        {/* Frontend Section */}
        <div className={styles.imageTextContainer} style={{ gap: "0.1rem", marginTop: "-200px" }}>
          <div className={styles.textContent} style={{ alignItems: "flex-start" }}>
            <h1 className={styles.smallHeader} style={{ margin: 0 }}>Frontend</h1>
            <p className={styles.mediumText}>
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
            style={{ width: "450px" }}
          />
        </div>

        {/* Link / GitHub Section */}
        <section className={styles.footerCTA}>
          <p className={styles.normalHeader}>
            Neugierig geworden?<br />
            Hier geht es zum 
          </p>
          <p className={styles.monoHeader} style={{ fontWeight: "500"}}>
            GitHub Repository:
          </p>
          <a
            href="https://github.com/rosalieO/Webtech_Test/tree/main/week05"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLinkWrapper}
          > 
            <img 
              src="/icons/hangman.png"
              alt="hangman icon"
              className={styles.projectLinkIcon}
            />
          </a>
        </section>
      </main>
    </div>
  );
}