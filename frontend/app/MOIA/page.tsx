// Author: Rosalie Obeldobel

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

      {/* Project Process*/}
      <main className={styles.mainContent}> 
        <h1 className={styles.normalHeader}>MOIA - Museum Of Interactive Art</h1>
        <img
          src="images/moia/moia-start.jpeg"
          alt="MOIA Start"
          style={{
            width: "1200px",
            height: "700px",
            marginTop: "50px",
            marginLeft: "-100px"
          }}
        />
        <p className={styles.quote} style={{ marginTop: "150px" }}>
            MOIA ist eine räumliche Installation, die künstliche Intelligenz als 
            kreativen Partner erlebbar macht. Ziel des Projekts ist es zu zeigen, 
            dass KI nicht trennt, sondern Menschen verbindet, indem sie gemeinsames 
            künstlerisches Erleben ermöglicht. Zwei Plattformen, eine Wand und viele 
            Perspektiven schaffen einen Raum, in dem Mensch und Maschine gemeinsam 
            Kunst erschaffen.
        </p>

        {/* Discover*/}
        <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Discover</h2>
        <img
          src="images/moia/moia_discover.jpeg"
          alt="Recherche"
          className={styles.image}
          style={{
            width: "100%",
            height: "100%",
            marginTop: "50px",
            display: "block",
            objectPosition: "center"
          }}
        />
        <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
          Ausgangspunkt der Recherche war die Frage, wie künstliche Intelligenz im 
          kreativen Kontext eingesetzt werden kann, ohne  dabei den Menschen zu ersetzen. 
          Dabei wurden Themen wie Mensch-Maschine-Interaktion, kollaborative Kunst, 
          Computer Vision und interaktive Installationen untersucht. Die Erkenntnisse 
          bildeten die Grundlage für das konzeptionelle und technische Design der Installation.
        </p>
  
        {/* Define*/}
        <div className={styles.imageTextContainer}>
          <img
            src="images/moia/moia_define.jpeg"
            alt="Recherche"
            className={styles.image}
          />
          <div className={styles.textContent}>
            <h1 className={styles.normalHeader}>
              Define
            </h1>
            <p className={styles.mediumText}>
              In der Planungsphase wurden Konzept, Raumaufteilung, technische Umsetzung 
              und Interaktionsabläufe definiert. Es entstand ein Zusammenspiel aus Design, 
              Technologie und Nutzererlebnis. Die Installation wurde so konzipiert, dass 
              Nutzer*innen aktiv in den kreativen Prozess eingebunden werden und die KI 
              in Echtzeit auf ihre Bewegungen reagiert.
            </p>
          </div>
        </div>

        {/* Develop*/}
        <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Develop</h2>
        
        <img
          src="images/moia/moia_develop.png"
          alt="Building"
          className={styles.image}
          style={{
            width: "100%",
            height: "100%",
            marginTop: "50px",
            display: "block",
            objectPosition: "center"
          }}
        />
        
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
            Der Aufbau der Installation erfolgte größtenteils in Handarbeit. Die Wand 
            und Plattformen wurden konstruiert, Kabel verlegt und die technische 
            Infrastruktur eingerichtet. Der Prozess war geprägt von Improvisation, 
            Experimentieren und Teamarbeit. Auch Herausforderungen und Fehler wurden als 
            Teil des kreativen Prozesses verstanden.
          </p>
        
        {/* Deliver*/}
        <div className={styles.imageTextContainer}>
          <div style={{ width: "400px" }}>
            <VideoOnScroll src="/videos/moia.mp4" />
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.normalHeader}>
              Deliver
            </h1>
            <p className={styles.mediumText}>
              Die Installation nutzt Computer Vision und künstliche Intelligenz, um 
              Nutzerbewegungen zu erfassen und daraus visuelle Kunstwerke zu generieren. 
              Alle Daten und Interaktionen werden in TouchDesigner verarbeitet, wo die 
              Echtzeit-Visualisierungen entstehen. Die Teilnehmenden werden so aktiv Teil 
              des Kunstwerks.
              <br /><br />
              Das Ergebnis ist eine interaktive, kollaborative Installation, die zeigt, 
              wie künstliche Intelligenz Menschen zusammenbringen kann. MOIA schafft einen 
              Raum für gemeinsames Erleben, kreative Zusammenarbeit und neue Perspektiven auf KI. 
              Das Projekt vereint Technik, Design und Teamarbeit zu einem lebendigen Gesamterlebnis.
            </p>
          </div>
        </div>

      

      <p className={styles.normalHeader} style={{ marginTop: "150px"}}>
        Neugierig geworden?<br />
        Hier geht es zur <br /> Website:
      </p>
      <a
        href="https://web.moia.workers.dev/"
        aria-label="Moia Logo" 
        className={styles.socialLink}
      > 
        <img 
          src="/icons/MOIA_LOGO.png"
          alt="Moia Logo"
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
