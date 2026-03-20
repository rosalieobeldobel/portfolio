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
              Das Projekt RES ist eine in Unity entwickelte MR-Anwendung in Kooperation mit der Berufsfeuerwehr München. Als MR-Brille wurde 
              die Meta Quest 3 verwendet. Durch die MR-Anwendung sollen Personen, die die Erstsichtung an Einsatzstellen durchführen, assistiert werden. 
              Die Einsatzkräfte sollen verletzte Personen schnell und einfach digital markieren und kategorisieren können, um Entscheidungen effizient, 
              nachvollziehbar und teamübergreifend sichtbar zu machen. 
          </p>

          {/* Discover */}
          <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Discover</h2>
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
              Das Projekt wurde in einer Gruppe von vier Personen abgelegt. Zu diesen Personen zählen Aurelia ..., Ash ..., Lisa Bott und 
              Rosalie Obeldobel. Die Recherche begann mit einem Besuch der Feuerwache 6. Dort erlangte man einen Einblick in jede Abteilung der 
              Feuerwache und konnte erste Fragen klären. Des Weiteren wurde ausführliche Internetrecherche betrieben, alles auf einem FigJam-Board 
              zusammengefasst und ausgewertet.
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
              Die Gruppe hat aus allen Problemstellen zwei detailierter betrachtet und mögliche Lösungen mit der Meta Quest 3 erarbeitet. Eine 
              Präsentation vor Angestellten der Berufsfeuerwehr München lieferte umfangreiches Feedback und führte zu der Entscheidung eine MR-Anwendung 
              für Erstsichtungen zu entwickeln. Ein genauer Ablauf mit allen Funktionen der MR-Anwendung wurde definiert und bildete den Orientrierungsrahmmen 
              für die spätere Umsetzung.
          </p>
          
          {/* Develop */}
          <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Develop</h2>
          <div style={{ marginTop: "10px" }}>
            <ImageSlider images={developImages} />
          </div>
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
              Zuerst wurde das Konzept hinter der Anwendung definiert. Die MR-Anwendung soll eine Übersicht über die Einsatzstelle bieten, Informationen bzw. 
              Daten über Patienten verwalten, die Kommunikation zwischen den einzelnen Instanzen koordinieren und Einsatzkräften gewährleisten, dass sie 
              zu jeder Zeit ihre Hände frei zur Verfügung haben. Es sollte pro Gruppenmitglied eine Funktion entwickelt werden. Diese Funktionen umfassten die 
              Personenmarkierung, eine Checkliste zur Einstufung der Patienten, eine Standordverfolgung mit Kartenansicht und eine Sprachsteuerung mit Audioaufnahme. 
              Die MR-Anwendung wurde kooperativ über GitLab und mit Hilfe von Unity entwickelt.
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
                Die fertige MR-Anwendung wurde auf der Feuerwache 6 präsentiert und ausgestellt. Während die Beuscher:innen RES mit Hilfe der Meta Quest 3 
                ausprobieren konnten, haben wir diese einen quantitativen Umfragebogen ausfüllen lassen. Auf diese Art und Weise erhielten wir eine 
                große Menge an Feedback-Material, die wir unserer Usability-Testing-Auswertung hinzufügen konnten. 
                <br /><br />
                Die Ausstellung zeigte, dass die futuristische und prototypische Anwendung ein existierendes Problem anspricht. Viele Besucher:innen der 
                Feuerwehr hatten ein großes Interesse an unserem Lösungsansatz und dessen Weiterentwicklung in der Zukunft. 
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