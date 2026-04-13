// Author: Rosalie Obeldobel
import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";
import VideoOnScroll from "@/components/videoscrolltrigger";

export default function ProjectDetailPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Sidebars */}
      <MenuLeft />
      <MenuRight />

      <main className={styles.mainContent}> 
        
        <h1 className={styles.normalHeader} style={{ marginTop: "80px" }}>
          MOIA - Museum Of Interactive Art
        </h1>

        <div className={styles.heroImageContainer}>
          <img
            src="images/moia/moia-start.jpeg"
            alt="MOIA Start"
            className={styles.titleImage}
          />
        </div>

        <p className={styles.titleQuote}>
          MOIA ist eine räumliche Installation, die künstliche Intelligenz als kreativen Partner erlebbar macht. 
          Ziel des Projekts ist es zu zeigen, dass KI nicht trennt, sondern Menschen verbindet, indem sie gemeinsames 
          künstlerisches Erleben ermöglicht. Zwei Plattformen, eine Wand und viele Perspektiven schaffen einen Raum, 
          in dem Mensch und Maschine gemeinsam Kunst erschaffen.
        </p>

        {/* Discover Section */}
        <section className={styles.projectSection}>
          <h2 className={styles.normalHeader} style={{ textAlign: 'center' }}>
            Discover
          </h2>
          
          <img
            src="images/moia/moia_discover.jpeg"
            alt="Recherche"
            className={styles.fullWidthImage}
          />
          
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "40px" }}>
            Ausgangspunkt der Recherche war die Frage, wie künstliche Intelligenz im kreativen Kontext eingesetzt werden kann, 
            ohne den Menschen zu ersetzen. Dabei wurden Themen wie Mensch-Maschine-Interaktion, kollaborative Kunst, Computer Vision 
            und interaktive Installationen untersucht. Die Erkenntnisse bildeten die Grundlage für das konzeptionelle und technische Design 
            der Installation.
          </p>
        </section>

        {/* Define Sektion - Side by Side */}
        <div className={styles.imageTextContainer}>
          <img
            src="images/moia/moia_define.jpeg"
            alt="Define Phase"
            className={styles.image}
          />
          <div className={styles.textContent} style={{ padding: 0, alignItems: "flex-start" }}> 
            <h2 className={styles.normalHeader} style={{ margin: 0 }}>Define</h2>
            <p className={styles.mediumText}>
              In der Planungsphase wurden Konzept, Raumaufteilung, technische Umsetzung und Interaktionsabläufe definiert. Es entstand 
              ein Zusammenspiel aus Design, Technologie und Nutzererlebnis. Die Installation wurde so konzipiert, dass Nutzer*innen aktiv 
              in den kreativen Prozess eingebunden werden und die KI in Echtzeit auf ihre Bewegungen reagiert.
            </p>
          </div>
        </div>

        {/* Develop Sektion */}
        <section className={styles.projectSection}>
          <h2 className={styles.normalHeader} style={{ textAlign: 'center' }}>
            Develop
          </h2>
          
          <img
            src="images/moia/moia_develop.png"
            alt="Building"
            className={styles.fullWidthImage}
          />
        
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "40px" }}>
            Der Aufbau der Installation erfolgte größtenteils in Handarbeit. Die Wand und Plattformen wurden konstruiert, Kabel verlegt und 
            die technische Infrastruktur eingerichtet. Der Prozess war geprägt von Improvisation, Experimentieren und Teamarbeit. Auch 
            Herausforderungen und Fehler wurden als Teil des kreativen Prozesses verstanden.
          </p>
        </section>

        {/* Deliver Sektion - Side by Side */}
        <div className={styles.imageTextContainer} style={{ marginBottom: "120px" }}>
          <div style={{ flex: 1, minWidth: "300px" }}>
            <VideoOnScroll src="/videos/moia.mp4" />
          </div>
          <div className={styles.textContent} style={{ padding: 0, flex: 1, alignItems: "flex-start" }}>
            <h2 className={styles.normalHeader} style={{ margin: 0 }}>Deliver</h2>
            <p className={styles.mediumText}>
              Die Installation nutzt Computer Vision und künstliche Intelligenz, um Nutzerbewegungen zu erfassen und daraus visuelle Kunstwerke 
              zu generieren. Alle Daten und Interaktionen werden in TouchDesigner verarbeitet, wo die Echtzeit-Visualisierungen entstehen. 
              Die Teilnehmenden werden so aktiv Teil des Kunstwerks.
              <br /><br />
              Das Ergebnis ist eine interaktive, kollaborative Installation, die zeigt, wie künstliche Intelligenz Menschen zusammenbringen 
              kann. MOIA schafft einen Raum für gemeinsames Erleben, kreative Zusammenarbeit und neue Perspektiven auf KI. Das Projekt vereint 
              Technik, Design und Teamarbeit zu einem lebendigen Gesamterlebnis.
            </p>
          </div>
        </div>

        {/* Footer / Call to Action */}
        <section className={styles.footerCTA}>
          <p className={styles.normalHeader}>
            Neugierig geworden?<br />
            Hier geht es zur 
          </p>
          <p className={styles.monoHeader} style={{ fontWeight: "500"}}>Website:</p>
          
          <a
            href="https://web.moia.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLinkWrapper}
          > 
            <img 
              src="/icons/MOIA_LOGO.png"
              alt="Moia Logo"
              className={styles.projectLinkIcon}
              style={{ width: "200px" }} // Etwas größer als Standard-Icons, da es das Hauptlogo ist
            />
          </a>
        </section>

      </main>
    </div>
  );
}