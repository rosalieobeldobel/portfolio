// Author: Rosalie Obeldobel
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
      <div className={styles.pageWrapper}>
        {/* Linke Sidebar */}
        <MenuLeft />
  
        {/* Rechte Sidebar */}
        <MenuRight />
  
        {/* Project */}
        <main className={styles.mainContent}> 
          <h1 className={styles.normalHeader} style={{ marginTop: "80px" }}>RES - Rapid Emergency Scoping</h1>
          
          <div className={styles.heroImageContainer}>
            <img
              src="images/res/RES-Logo.jpg"
              alt="RES Start"
              className={styles.titleImage}
            />
          </div>
  
          <p className={styles.titleQuote}>
              Das Projekt RES ist eine in Unity entwickelte MR-Anwendung in Kooperation mit der Berufsfeuerwehr München. Als MR-Brille wurde 
              die Meta Quest 3 verwendet. Durch die MR-Anwendung sollen Personen, die die Erstsichtung an Einsatzstellen durchführen, assistiert werden. 
              Die Einsatzkräfte sollen verletzte Personen schnell und einfach digital markieren und kategorisieren können, um Entscheidungen effizient, 
              nachvollziehbar und teamübergreifend sichtbar zu machen. 
          </p>

          {/* Discover Section */}
          <section className={styles.projectSection}>
            <h2 className={styles.normalHeader} style={{ textAlign: 'center' }}>Discover</h2>
            <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "40px" }}>
                Das Projekt wurde in einer Gruppe von vier Personen abgelegt. Die Recherche begann mit einem Besuch der Feuerwache 6. Dort erlangte man 
                einen Einblick in jede Abteilung der Feuerwache und konnte erste Fragen klären. Des Weiteren wurde ausführliche Internetrecherche betrieben, 
                alles auf einem FigJam-Board zusammengefasst und ausgewertet.
            </p>
            <img
              src="images/res/res_research.png"
              alt="research"
              className={styles.fullWidthImage}
              style={{ marginTop: "40px" }}
            />
          </section>

          {/* Define Section */}
          <section className={styles.projectSection}>
            <h2 className={styles.normalHeader} style={{ textAlign: 'center' }}>Define</h2>
            <img
              src="images/res/res_userflow.png"
              alt="Userflow"
              className={styles.fullWidthImage}
            />
            <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "0px" }}>
                Die Gruppe hat aus allen Problemstellen zwei detailierter betrachtet und mögliche Lösungen mit der Meta Quest 3 erarbeitet. Eine 
                Präsentation vor Angestellten der Berufsfeuerwehr München lieferte umfangreiches Feedback und führte zu der Entscheidung eine MR-Anwendung 
                für Erstsichtungen zu entwickeln. Ein genauer Ablauf mit allen Funktionen der MR-Anwendung wurde definiert und bildete den Orientrierungsrahmmen 
                für die spätere Umsetzung.
            </p>
          </section>
          
          {/* Develop Section */}
          <section className={styles.projectSection}>
            <h2 className={styles.normalHeader} style={{ textAlign: 'center' }}>Develop</h2>
            <div className={styles.sliderWrapper}>
              <ImageSlider images={developImages} />
            </div>
            <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "0px" }}>
                Zuerst wurde das Konzept hinter der Anwendung definiert. Die MR-Anwendung soll eine Übersicht über die Einsatzstelle bieten, Informationen bzw. 
                Daten über Patienten verwalten, die Kommunikation zwischen den einzelnen Instanzen koordinieren und Einsatzkräften gewährleisten, dass sie 
                zu jeder Zeit ihre Hände frei zur Verfügung haben. Es sollte pro Gruppenmitglied eine Funktion entwickelt werden. Diese Funktionen umfassten die 
                Personenmarkierung, eine Checkliste zur Einstufung der Patienten, eine Standordverfolgung mit Kartenansicht und eine Sprachsteuerung mit Audioaufnahme. 
                Die MR-Anwendung wurde kooperativ über GitLab und mit Hilfe von Unity entwickelt.
            </p>
          </section>

          {/* Deliver Section */}
          <div className={styles.imageTextContainer} style={{ marginTop: "100px", alignItems: "center" }}>
              <div style={{ flex: "1", maxWidth: "400px" }}>
                <VideoOnScroll src="/videos/res_aufnahme.mp4" />
              </div>
              <div className={styles.textContent} style={{ flex: "1", alignItems: "flex-start", justifyContent: "center" }}>
              <h2 className={styles.normalHeader}>Deliver</h2>
              <p className={styles.mediumText} style={{ margin: 0 }}>
                Die fertige MR-Anwendung wurde auf der Feuerwache 6 präsentiert und ausgestellt. Die Besucher:innen RES konnten mit Hilfe der Meta Quest 3 RES
                ausprobieren und im Anschluss eine quantitaive Umfrage zu ihrem Erlebnis ausfüllen. Auf diese Art und Weise erhielt man eine 
                große Menge an Feedback-Material, die der Usability-Testing-Auswertung hinzufügt wurde. 
                <br /><br />
                Die Ausstellung zeigte, dass die futuristische und prototypische Anwendung ein existierendes Problem anspricht. Viele Besucher:innen der 
                Feuerwehr hatten ein großes Interesse an dem Lösungsansatz und dessen Weiterentwicklung in der Zukunft. 
              </p>
            </div>
          </div>

          {/* Footer CTA Section */}
          <section className={styles.footerCTA}>
            <p className={styles.normalHeader}>
              Neugierig geworden?<br />
              hier geht es zum
            </p>
            <p className={styles.monoHeader} style={{ fontWeight: "500"}}>GitLab Repository:</p>
            <a
              href="https://gitlab.lrz.de/mixedreality2526/ws25/firefighters/groupproject-k"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLinkWrapper}
            > 
              <img 
                src="/icons/gitlab.png"
                alt="gitlab icon"
                className={styles.projectLinkIcon}
              />
            </a>
          </section>
        </main>
      </div>
    );
}