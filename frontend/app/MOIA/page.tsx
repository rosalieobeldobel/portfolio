// Author: Rosalie Obeldobel
import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";
import VideoOnScroll from "@/components/videoscrolltrigger";

export default function ProjectDetailPage() {
  return (
    <div style={{ position: "relative" }}>
      <MenuLeft />
      <MenuRight />

      <main className={styles.mainContent}> 
        {/* Header steht noch im mainContent (zentriert) */}
        <h1 className={styles.normalHeader} style={{ margin: "50px 0" }}>
          MOIA - Museum Of Interactive Art
        </h1>

        {/* BILD: Berührt die Sidebars, weil es direkt im mainContent liegt */}
        <img
          src="images/moia/moia-start.jpeg"
          alt="MOIA Start"
          className={styles.titleImage}
        />

        {/* TEXT-BEREICH: Alles hier drin hält 100px Abstand */}
        <div className={styles.textContent}>
          <p className={styles.quote} style={{ marginTop: "150px" }}>
              MOIA ist eine räumliche Installation...
          </p>

          <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>
            Discover
          </h2>
          
          <img
            src="images/moia/moia_discover.jpeg"
            alt="Recherche"
            style={{ width: "100%", marginTop: "50px" }}
          />
          
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "20px" }}>
            Ausgangspunkt der Recherche war die Frage...
          </p>
        </div>

        {/* CONTAINER MIT BILD UND TEXT (Define) */}
        <div className={styles.imageTextContainer}>
          <img
            src="images/moia/moia_define.jpeg"
            alt="Recherche"
            className={styles.image}
            style={{ width: "50%" }}
          />
          <div className={styles.textContent} style={{ padding: 0, width: "50%" }}> 
            {/* Hier padding 0, weil der Parent (imageTextContainer) schon padding hat */}
            <h1 className={styles.normalHeader}>Define</h1>
            <p className={styles.mediumText}>
              In der Planungsphase wurden Konzept...
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
        
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "20px" }}>
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
        Hier geht es zur 
      </p>
      <p className={styles.monoHeader}>
          Website:
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
