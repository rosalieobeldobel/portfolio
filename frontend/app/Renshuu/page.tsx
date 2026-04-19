// Author: Rosalie Obeldobel
import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";
import VideoOnScroll from "@/components/videoscrolltrigger";

export default function ProjectDetailPage() {
    return(
      <div className={styles.pageWrapper}>
        {/* Linke Sidebar */}
        <MenuLeft />
  
        {/* Rechte Sidebar */}
        <MenuRight />
  
        {/* Project */}
        <main className={styles.mainContent}> 
          <h1 className={styles.normalHeader} style={{ marginTop: "80px" }}>Renshuu</h1>
          
          <div className={styles.heroImageContainer}>
            <img
              src="images/renshuu/renshuu_start.png"
              alt="Renshuu Start"
              className={styles.titleImage}
            />
          </div>
  
          <p className={styles.titleQuote}>
              Die Aufgabe des Studienkurses “Grundlagen Interface und Interaktionsdesign” war es ein beliebiges Interface auszuwählen und 
              dieses zu verbessern. Der Fokus dabei lag auf den im Studienkurs behandelten UX- und UI-Regeln. Für das Projekt wurde die Lernplattform Renshuu 
              ausgewählt. Auf dieser kann man kostenlos und spielerisch Japanisch erlernen. Es wurde ausschließlich mit dem Programm Figma gearbeitet. 
          </p>

          {/* Analyse Section */}
          <section className={styles.projectSection}>
            <h2 className={styles.normalHeader} style={{ textAlign: 'center' }}>Analyse</h2>
            <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "40px" }}>
                Zu Beginn wurde die Homepage der Webseite und das Erlernen einer Vokabel anhand der UX-Regeln analysiert. 
                Negatives wurde mit rot markiert und Positives mit grün. Dabei war es vor allem wichtig, die positiven Aspekte 
                und den allgemeinen Charakter der Website später beizubehalten. Zusätzlich fand die Analyse von einer vergleichbaren Webseite 
                namens “Hey Japan” statt. Dadurch konnte herausgefunden werden welches Design Nutzer:innen von digitalen Lernplattformen gewohnt sind
                und welche Erwartungen diese an Renshuu hätten.
            </p>
            <img
              src="images/renshuu/UX-Analyse.png"
              alt="Analyse"
              className={styles.fullWidthImage}
              style={{ marginTop: "40px" }}
            />
          </section>

          {/* Wireframes Section */}
          <div className={styles.imageTextContainer}>
            <img
              src="images/renshuu/Wireframes.png"
              alt="Wireframes"
              className={styles.image}
              style={{ maxWidth: "500px" }}
            />
            <div className={styles.textContent} style={{ alignItems: "flex-start" }}>
              <h2 className={styles.normalHeader}>Wireframes</h2>
              <p className={styles.mediumText} style={{ margin : 0 }}>
                Die Aufgabe war es nur für einen Klickpfad Wireframes zu erstellen. Die Entscheidung viel auf das Erlernen einer Vokabel, wofür 
                zwei verschiedene Versionen an Wireframes erstellt wurden. Die Intention bei den Wireframes war es die Menge an Informationen 
                zu verringern, die wichtigen Informationen leichter ersichtlich zu gestalten und den Goal-Gradient Effekt anzupassen. Nach 
                Einholen von Feedback von Nutzer:innen wurden die positiven Aspekte von beiden Versioen extrahiert und in einer
                finalen Version kombiniert.
              </p>
            </div>
          </div>

          {/* UI Design Section */}
          <section className={styles.projectSection}>
            <h2 className={styles.normalHeader} style={{ textAlign: 'center' }}>UI Design</h2>
            <img
              src="images/renshuu/UI-Design.png"
              alt="UI Design"
              className={styles.fullWidthImage}
            />
            <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "0px" }}>
                Als Erstes wurde die vorhandene Farbpalette analysiert, in primäre und Akzentfarben kategorisiert und die einzelnen Farben 
                aneinander angepasst. Dadurch entstand ein besserer Kontrast zwischen Text und Hintergrund. Gleichzeitig können die Nutzer:innen durch 
                die familiäre Einfärbung des Designs in den Farben rot oder grün intuitiver erkennen, ob ihre Antwort richtig oder falsch war. 
                Für die Typografie verwendete man für die Einheitlichkeit ausschließlich Roboto. Ein großer Vorteil dieser Schriftart ist es, dass sie 
                sowohl auf Englisch und Deutsch, als auch auf Japanisch eine gute Lesbarkeit gewährleistet. Der Charakter der Webseite wurde 
                verstärkt hervorgebracht durch die Verwendung des Logos in Form von Illustrationen.
            </p>
          </section>

          {/* Prototype Section */}
          <section className={styles.projectSection}>
            <h2 className={styles.normalHeader} style={{ textAlign: 'center' }}>Prototype</h2>
            <img
              src="images/renshuu/Prototype.png"
              alt="Prototype Overview"
              className={styles.fullWidthImage}
            /> 
            
            <div className={styles.imageTextContainer} style={{ marginTop: "80px", marginBottom: "150px" }}>
              <div style={{ flex: "1", maxWidth: "400px" }}>
                <VideoOnScroll src="/videos/renshuu_prototype.mp4" />
              </div>
              <div className={styles.textContent} style={{ flex: "1.5", alignItems: "flex-start" }}>
                <h3 className={styles.smallHeader} style={{ margin: 0 }}>Klickpfad</h3>
                <p className={styles.mediumText}>
                  Das finale Design wurde als ein interaktiver Figma-Prototyp umgesetzt. Bei diesem kann man durch den Klickpfad klicken und auf 
                  diese Art und Weise das neue Design erlebbar machen. 
                  <br /><br />
                  Der Prototyp beinhaltet nur noch die wesentlichen Informationen, aber behält den charakteristischen japanischen Design-Stil bei. 
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
}