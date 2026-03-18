import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";
import VideoOnScroll from "@/components/videoscrolltrigger";
import ImageSlider from "@/components/imageslider";


export default function ProjectDetailPage() {

    const developImages = [
      "/images/res/develop/slide1.png",
      "/images/res/develop/slide2.png",
      "/images/res/develop/slide3.png",
      "/images/res/develop/slide4.png",
      "/images/res/develop/slide5.png",
      "/images/res/develop/slide6.png",
      "/images/res/develop/slide7.png",
      "/images/res/develop/slide8.png",
      "/images/res/develop/slide9.png",
      "/images/res/develop/slide10.png",
      "/images/res/develop/slide11.png",
      "/images/res/develop/slide12.png",
    ];

    return(
      <div style={{ position: "relative" }}>
        {/* Linke Sidebar */}
        <MenuLeft />
  
        {/* Rechte Sidebar */}
        <MenuRight />
  
        {/* Project */}
        <main className={styles.mainContent}> 
          <h1 className={styles.normalHeader}>RES - Rapid Emergency Scoping</h1>
          <img
            src="images/res/RES-Logo.jpg"
            alt="RES Start"
            style={{
              width: "1300px",
              height: "700px",
              marginTop: "50px",
              marginLeft: "-200px"
            }}
          />
  
          <p className={styles.quote} style={{ marginTop: "150px"}}>
              Das Projekt RES ist eine in Unity entwickelte MR-Anwendung in Kooperation mit der Berufsfeuerwehr Münnchen. Als MR-Brille wurde 
              die Meta Quest 3 verwendet. Durch die MR-Anwendung sollen Personen, die die Erstsichtung an Einsatzstellen durchführen, assistiert werden. 
              Die Einsatzkräfte sollen verletzte Personen schnell und einfach digital markieren und kategorisieren können, um Entscheidungen effizient, 
              nachvollziehbar und teamübergreifend sichtbar zu machen. Die MR-Anwendung soll eine Übersicht über die Einsatzstelle bieten, Informationen bzw. 
              Daten über Patienten verwalten, die Kommunikation zwischen den einzelnen Instanzen koordinieren und EInsatzkräften gewährleisten, dass sie 
              zu jeder Zeit ihre Hände frei haben.
          </p>

          {/* Discover */}
          <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Discover</h2>
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
              Zu Beginn wurde die Homepage der Website und das Erlernen einer Vokabel anhand der UX-Regeln analysiert. 
              Negatives wurde mit rot markiert und Positives mit grün. Dabei war es vor allem wichtig, die positiven Aspekte 
              und den allgemeinen Charakter der Website später beizubehalten. Zusätzlich fand die Analyse von einer vergleichbaren Website 
              names “Hey Japan” statt. Dadurch konnte herausgefunden werden welches Design Nutzer:innen von digitalen Lernplattformen gewohnt sind
              und welche Erwartungen diese an Renshuu hätten.
          </p>
          <img
            src="images/res/res_research.png"
            alt="research"
            style={{
              width: "100%",
              height: "100%",
              marginTop: "50px",
              display: "block",
              objectPosition: "center"
            }}
          />

          {/* Development */}
          <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Define</h2>
          <img
            src="images/res/res_userflow.png"
            alt="Userflow"
            style={{
              width: "100%",
              height: "100%",
              marginTop: "50px",
              display: "block",
              objectPosition: "center"
            }}
          />
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
              Als Erstes wurde die vorhandene Farbpalette analysiert, in primäre und Akzentfarben kategorisiert und die einzelnen Farben 
              aneinander angepasst. Dadurch entstand ein besserer Kontrast zwischen Text und Hintergrund. Gleichzeitig können die Nutzer:innen durch 
              die familiäre Einfärbung des Designs in den Farben rot oder grün intuitiver erkennen, ob ihre Antwort richtig oder falsch war. 
              Für die Typografie verwendete man für Einheitlichkeit ausschließlich Roboto. Ein großer Vorteil dieser Schriftart ist es, dass sie 
              sowohl auf Englisch und Deutsch, als auch auf Japanisch eine gute Lesbarkeit gewährleistet. Der Charakter der Website wurde 
              verstärkt hervorgebracht durch die Verwendung des Logos in Form von Illustrationen.
          </p>

          {/* Develop */}
          <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Develop</h2>
          <div style={{ marginTop: "10px" }}>
            <ImageSlider images={developImages} />
          </div>
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
              Die Recherche bildete den wichtigsten Teil des Projektes. Nur wenn man ein existierendes Problem findet kann man ein Design 
              entwickeln, dass einen Mehrwert hat. Diese Phase war von dem direkten Kontakt mit den Menschen in der Innenstadt geprägt. Unternehmer:innen 
              und Mitarbeiter:innen von kleinen oder mittelständischen Betrieben wurden interviewt. Als Gebiet wurde der Marienplatz und der anliegende 
              Viktoalienmarkt ausgewählt. Dort herrschen durch die Fußgängerzone erschwerte Bedingungen für die Warenlieferungen, also ein idealer Ort 
              für das Thema des Projektes.
          </p>

          {/* Deliver */}
          <div className={styles.imageTextContainer}>
            <div style={{ width: "400px" }}>
              <VideoOnScroll src="/videos/res_aufnahme.mp4" />
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
            hier geht es zum
          </p>
          <p className={styles.monoHeader}>
            GitLab Repository:
          </p>
          <a
            href="https://gitlab.lrz.de/mixedreality2526/ws25/firefighters/groupproject-k"
            aria-label="res gitlab repo" 
            className={styles.socialLink}
          > 
          <img 
            src="/icons/gitlab.png"
            alt="gitlab icon"
              style={{
                width: "30%",
                height: "30%",
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