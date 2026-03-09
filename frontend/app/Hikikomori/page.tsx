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

        {/* Discover */}
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
            Das Abschlussprojekt des Kurses Generative Gestaltung und KI im Design war eine Datenvisualisierung zu einem globalen Thema. Optional konnte KI für die Generierung der Visualisierungen verwendet werden.
            Das Projekt hatte eine Zeitspanne von 6 Wochen und wurde in Gruppen von 2-3 Personen durchgeführt. Die Gruppe Hikikomori bestand aus den Mitgliedern Polina Sippl, Gloria Bichler und Rosalie Obeldobel. 
            Thematik der ersten Phase war "Discover". In dieser Phase sollte man sich einen allgemeinen Überblick über mögliche Themen verschaffen. Die möglichen Themen wurden durch Brainstorming zusammengetragen, 
            technische Möglichkeiten der Visualisierung von Daten wurden recherchiert, sowie existierende Datensätze vermerkt. 
          </p>

        {/* Define */}
        <div className={styles.imageTextContainer}>
            <img
          src="images/hikikomori/define.png"
          alt="Define"
          className={styles.image}
          />
          <div className={styles.textContent}>
            <h1 className={styles.normalHeader}>
              Define
            </h1>
            <p className={styles.mediumText}>
              Aus allen Themenfeldern, die beim brainstorming zusammengetragen wurden, wurde die Auswahl zuerst auf drei Themen reduziert. Diese Themen waren "Mental Health & Death", "Mental Health & Economy" und 
              "Mental Health & Social Media". Die Entscheidung viel auf das Thema "Mental Health & Social Media", da es heutzutage viele Menschen betrifft. Durch das Projekt konnte auf dieses Problem aufmerksam gemacht werden. 
            </p>
          </div>
        </div>
        
        {/* Develop */}
        <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Develop</h2>
        <img
          src="images/hikikomori/develop.png"
          alt="Hikikomori Develop"
          style={{
            width: "100%",
            height: "100%",
            marginTop: "50px",
            display: "block",
            objectPosition: "center"
          }}
        />
        <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
            Das Themenfeld "Mental Health & Social Media" war sehr großflächig. Durch ein ausführliches Brainstorming konnten mögliche Unterthemen herausgefunden und nach Umsetzbarkeit bewertet werden.
            Zur gleichen Zeit recherchierte man mögliche Visualisierungen der Daten und berwertete diese nach technischer Umsetzung. Zum Schluss hat man sich auf drei Unterthemen geeignigt. Jedes Gruppenmitglied 
            wählte eins der drei Themen und entwickelte einen detailierten Umsetzungsplan. Nach gegenseitigen Präsentationen der Umsetzungspläne entschied man sich für das Thema Hikikomori. Dieses Thema konnte im zeitlichem Rahmen des
            Kurses umgesetzt werden und bot eine große Menge an Daten für die Visualisierung. 
        </p>

        {/* Concept */}
        <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Concept</h2>
        <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
            Das Konzept war eine interaktive, spielbare Webseite, die auf kreative Weise über das Phänomen Hikikomori informiert.  Das Ziel war ein digitales Erlebnis zu schaffen, das sowohl emotional berührt als auch faktenbasiert aufklärt.
        </p>
        <div className={styles.imageTextContainer} style={{ marginBottom: "150px" }}>
            <figure className={styles.figure}>
              <a
                href="https://github.com/PolinaSippel/Hikikomori-s-Life?tab=readme-ov-file"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/hikikomori/qr-code_githubrepo.png"
                  alt="QR-Code zum GitHub Repository"
                  className={styles.image}
                />
              </a>
          
              <figcaption className={styles.caption}>
                Zum GitHub Repository
              </figcaption>
              </figure>
            <div className={styles.textContent}>
            <h1 className={styles.smallHeader}>
              Hikikomori - Die Idee hinter dem Spiel
            </h1>
            <p className={styles.mediumText}>
              Die Entscheidung fiel auf ein Point-and-Click Adventure Spiel, da dieses Genre am Besten das Konzept kommunizieren kann.
              <br /><br />
              Hikikomori ist ein japanischer Begriff für Menschen, die sich über einen langen Zeitraum aus der Gesellschaft zurückziehen. Sie verlassen kaum noch ihr Zimmer und meiden soziale Kontakte. Daher entschieden wir uns für den Spielcharakter 
              Kenshin Ozawa, 37 Jahre alt. Sein bereits verstorbener Vater war gewälttätig ihm gegenüber. Deswegen lebt er nur noch mit seiner Mutter zusammen, welche jdeoch krank ist. Zu seinem jüngeren Bruder hat er keinen Kotakt mehr, da dieser Kenshin hasst.
              Kenshin selbst leidet an Depressionen, eine Angststörungen, ADHS und PTBS. Alle psychologischen Erkrankungen wurden ausgiebig recherchiert, um diese nicht fehlerhaft darzustellen. Durch die Website soll man in die Emotionen und das Leben von 
              Kenshin eintauchen und wird dabei passiv über die bekannten Daten von Hikikomori aufgeklärt. 
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
