// Author: Rosalie Obeldobel
import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";
import SkillsSectionCoding from '@/components/skillssectioncoding';
import SkillsSectionDesign from '@/components/skillssectiondesign';

export default function AboutMePage() {
  return (
    <div className={styles.pageWrapper}>
      <MenuLeft />
      <MenuRight />

      <main className={styles.mainContent}>
        {/* Intro Quote */}
        <p className={styles.quote}>
          Mein Ziel ist es, durch die Verbindung von Technik und Gestaltung Lösungen zu entwickeln, die Menschen helfen, statt sie zu behindern.
        </p>

        {/* Die zwei "Über Mich" Blöcke nebeneinander */}
        <div className={styles.aboutMeGrid}>
          <div className={styles.textContent}>
            <h1 className={styles.designHeader}>Über Mich</h1>
            <p className={styles.mediumText}>
              Ich bin Designerin mit einem starken Fokus auf barrierefreie, funktionale und nutzerzentrierte Gestaltung.
              Meine Arbeitsweise ist strukturiert, detailorientiert und problemorientiert, sodass ich existierende Probleme finde
              und Lösungen schrittweise entwickel. Ich kombiniere ästhetisches Gespür mit einem tiefen
              Verständnis für Usability und Barrierefreiheit, um Interfaces, Produkte und visuelle Kommunikation zu entwickeln,
              die Menschen begeistern und ihnen den Umgang erleichtern. Innovation, Kreativität und Teamfähigkeit treiben
              meine Arbeit an, und ich lege großen Wert darauf, Designlösungen zu schaffen, die sowohl schön als auch funktional sind.
            </p>
          </div>

          <div className={styles.textContent}>
            <h1 className={styles.monoHeader}>Über Mich</h1>
            <p className={styles.mediumText}>
              Ich bin Informatikerin mit einem starken Fokus auf strukturierten Problemlösungen, effizienter Codeentwicklung
              und benutzerfreundlichem Design. Meine Arbeitsweise ist organisiert, lösungsorientiert und detailverliebt,
              sodass ich Projekte zuverlässig von der Konzeption bis zur Umsetzung begleite. Ich kombiniere technisches Know-how
              in Programmiersprachen, Datenbanken und Webtechnologien mit einem verständnisvollen Blick für Nutzerbedürfnisse und
              zugängliches, inklusives Design. Es motiviert mich, digitale Lösungen zu schaffen, die Menschen helfen,
              Prozesse vereinfachen und Barrieren abbauen. Kreativität, Präzision und Teamfähigkeit sind für mich die Grundlage
              erfolgreicher Projekte, und ich strebe stets danach, innovative und nachhaltige Ergebnisse zu liefern.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <p className={styles.quote}>
          Meine Projekte entstehen aus einem tiefen Verständnis für Nutzerbedürfnisse und technische Möglichkeiten.
        </p>

        <div className={styles.skillsLayout}>
          <div className={styles.skillsColumn}>
            <SkillsSectionDesign />
          </div>
          <div className={styles.skillsColumn}>
            <SkillsSectionCoding />
          </div>
        </div>

        {/* Resume / Call to Action */}
        <div className={styles.resumeSection}>
          <p className={styles.quote}>
            Technik soll Menschen unterstützen, Aufgaben erleichtern und Barrieren abbauen.
          </p>
          
          <div className={styles.footerCTA} style={{ marginTop: "400px" }}>
            <p className={styles.normalHeader}>
              So neugierig...<br />
              Mehr findest du im
            </p>
            <p className={styles.monoHeader} style={{ fontWeight: "500"}}>Lebenslauf:</p>

            <a
              href="https://www.figma.com/design/YQx1lJunvLOfE2nVB6UTb0/Lebenslauf?node-id=0-1"
              aria-label="Lebenslauf" 
              className={styles.qrCodeWrapper}
            > 
              <img 
                src="/icons/qrcode.png"
                alt="QR-Code zum Lebenslauf"
                className={styles.qrCodeImage}
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}