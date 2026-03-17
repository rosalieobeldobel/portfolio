import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";
import ImageSlider from "@/components/imageslider";


export default function ProjectDetailPage() {

    const researchImages = [
      "/images/mingatrends/research/slide1.png",
      "/images/mingatrends/research/slide2.png",
      "/images/mingatrends/research/slide3.png",
      "/images/mingatrends/research/slide4.png",
      "/images/mingatrends/research/slide5.png",
      "/images/mingatrends/research/slide6.png",
      "/images/mingatrends/research/slide7.png",
    ];

    const syntheseImages = [
      "/images/mingatrends/synthese/slide1.png",
      "/images/mingatrends/synthese/slide2.png",
      "/images/mingatrends/synthese/slide3.png",
      "/images/mingatrends/synthese/slide4.png",
      "/images/mingatrends/synthese/slide5.png",
      "/images/mingatrends/synthese/slide6.png",
      "/images/mingatrends/synthese/slide7.png",
      "/images/mingatrends/synthese/slide8.png",
      "/images/mingatrends/synthese/slide9.png",
      "/images/mingatrends/synthese/slide10.png",
      "/images/mingatrends/synthese/slide11.png",
      "/images/mingatrends/synthese/slide12.png",
      "/images/mingatrends/synthese/slide13.png",
      "/images/mingatrends/synthese/slide14.png",
      "/images/mingatrends/synthese/slide15.png",
    ];

    const ideationImages = [
      "/images/mingatrends/ideation/slide1.png",
      "/images/mingatrends/ideation/slide2.png",
      "/images/mingatrends/ideation/slide3.png",
      "/images/mingatrends/ideation/slide4.png",
      "/images/mingatrends/ideation/slide5.png",
      "/images/mingatrends/ideation/slide6.png",
      "/images/mingatrends/ideation/slide7.png",
      "/images/mingatrends/ideation/slide8.png",
      "/images/mingatrends/ideation/slide9.png",
      "/images/mingatrends/ideation/slide10.png",
    ];
  
    const prototypingImages = [
      "/images/mingatrends/prototyping/slide1.png",
      "/images/mingatrends/prototyping/slide2.png",
      "/images/mingatrends/prototyping/slide3.png",
      "/images/mingatrends/prototyping/slide4.png",
      "/images/mingatrends/prototyping/slide5.png",
      "/images/mingatrends/prototyping/slide6.png",
      "/images/mingatrends/prototyping/slide7.png",
      "/images/mingatrends/prototyping/slide8.png",
      "/images/mingatrends/prototyping/slide9.png",
      "/images/mingatrends/prototyping/slide10.png",
    ];

    return(
      <div style={{ position: "relative" }}>
        {/* Linke Sidebar */}
        <MenuLeft />
  
        {/* Rechte Sidebar */}
        <MenuRight />
  
        {/* Project */}
        <main className={styles.mainContent}> 
          <h1 className={styles.normalHeader}>MingaTrends</h1>
          <img
            src="images/mingatrends/mingatrends_start.png"
            alt="MingaTrends Start"
            style={{
              width: "1300px",
              height: "700px",
              marginTop: "50px",
              marginLeft: "-200px"
            }}
          />
  
          <p className={styles.quote} style={{ marginTop: "150px"}}>
              Im Rahmen des Projektes sollte man sich einen von den vorgegebenen Services aussuchen, ein wirklich existierendes Problem recherchieren und 
              für dieses eine realistische und umsetzbare Lösung finden. Die Gruppenmitglieder Pia Röttcher und Rosalie Obeldobel wählten folgendes Thema: Es fehlt 
              ein bezahlbares und verlässliches Liefer- und Logistikkonzept für kleine und mittelständische Betriebe in der Innenstadt im Einklang mit der 
              Vision einer autofreien Innenstadt.
          </p>

          {/* Research */}
          <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Research</h2>
          <div style={{ marginTop: "10px" }}>
            <ImageSlider images={researchImages} />
          </div>
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
              Die Recherche bildete den wichtigsten Teil des Projektes. Nur wenn man ein existierendes Problem findet kann man ein Design 
              entwickeln, dass einen Mehrwert hat. Diese Phase war von dem direkten Kontakt mit den Menschen in der Innenstadt geprägt. Unternehmer:innen 
              und Mitarbeiter:innen von kleinen oder mittelständischen Betrieben wurden interviewt. Als Gebiet wurde der Marienplatz und der anliegende 
              Viktoalienmarkt ausgewählt. Dort herrschen durch die Fußgängerzone erschwerte Bedingungen für die Warenlieferungen, also ein idealer Ort 
              für das Thema des Projektes.
          </p>

          {/* Synthese */}
          <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Synthese</h2>
          <div style={{ marginTop: "10px" }}>
            <ImageSlider images={syntheseImages} />
          </div>
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
              Alle in der Recherche gewonnen Informationen werden in der Synthese ausgiebig analysiert. Das Ziel ist es alle herrschenden Probleme und 
              negativen Erlebnisse herauskristallisieren. Die Informationen wurden in verschiedene Kategorien eingeteilt, welche dann übersichtlich als eine 
              User Journey dargestellt werden konnten. Die existierenden Probleme konnten auf diese Art und Weise auf einen Blick erkannt werden.
          </p>

          {/* Ideation */}
          <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Ideation</h2>
          <div style={{ marginTop: "10px" }}>
            <ImageSlider images={ideationImages} />
          </div>
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
              Für die in der vorherigen Phase entdeckten Probleme wurden nun mit Hilfe verschiedener Methoden Ideen für Lösung für diese Probleme gesammelt. 
              Alle Ideen wurden anhand Umsetzbarkeit skaliert. Die Idee, die das schwerwiegendste Problem am Besten lösen würde und die höchste Umsetzbarkeit 
              hatte wurde ausgewählt. Die Entscheidung viel demnach auf eine App-Anwendung, welche über Trends beim Einkaufen in der Innenstadt aufklären sollte. 
              Auf diese Art und Weise sollten die Betriebe effizienter Lieferungen planen können. Die App würde Betriebe über die Nachfrage und die Kund:innen 
              über das Angebot aufklären. Erste Wireframes und Skizzen wurden für die Gestaltung der App angefertigt.
          </p>

          {/* Prototyping */}
          <h2 className={styles.normalHeader} style={{ textAlign: 'center', marginTop: "150px"}}>Prototyping</h2>
          <div style={{ marginTop: "10px" }}>
            <ImageSlider images={prototypingImages} />
          </div>
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px", marginBottom: "300px" }}>
              In diesem letzten Schritt sollte nur beispielhaft ein Figma-Prototyp der App-Anwendung erstellt werden, da die Gewichtung des Projektes auf 
              den vorherigen Phasen lag. Die wenigen Frames zeigen den ungefähren Aufbau der App und welche Inhalte diese zeigen würde. Bei dem Design orientierte
              man sich an Social-Media-Plattformen. Eine große Menge an Informationen sollte möglichst übersichtlich und einfach dargestellt werden. Gleichzeitig 
              soll das Design eine digitale lokale Zeitung widerspiegeln und ein heimisch Gefühl bei den Nutzer:innen auslösen.
          </p>
        </main>
      </div>
    );
}