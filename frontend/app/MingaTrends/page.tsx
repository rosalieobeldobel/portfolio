import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";
import ImageSlider from "@/components/imageslider";


export default function ProjectDetailPage() {

    const researchImages = [
      "/images/renshuu/research/slide1.png",
      "/images/renshuu/research/slide2.png",
      "/images/renshuu/research/slide3.png",
      "/images/renshuu/research/slide4.png",
      "/images/renshuu/research/slide5.png",
      "/images/renshuu/research/slide6.png",
      "/images/renshuu/research/slide7.png",
    ];

    const designImages = [
      "/images/renshuu/synthese/slide1.png",
      "/images/renshuu/synthese/slide2.png",
    ];
  
    const prototypeImages = [
      "/images/renshuu/prototype/slide1.png",
      "/images/renshuu/prototype/slide2.png",
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
          <p className={styles.mediumText} style={{ textAlign: "center", marginTop: "50px" }}>
              Zu Beginn wurde die Homepage der Website und das Erlernen einer Vokabel anhand der UX-Regeln analysiert. 
              Negatives wurde mit rot markiert und Positives mit grün. Dabei war es vor allem wichtig, die positiven Aspekte 
              und den allgemeinen Charakter der Website später beizubehalten. Zusätzlich fand die Analyse von einer vergleichbaren Website 
              names “Hey Japan” statt. Dadurch konnte herausgefunden werden welches Design Nutzer:innen von digitalen Lernplattformen gewohnt sind
              und welche Erwartungen diese an Renshuu hätten.
          </p>
          <div style={{ marginTop: "50px" }}>
            <ImageSlider images={researchImages} />
          </div>
        </main>
      </div>
    );
}