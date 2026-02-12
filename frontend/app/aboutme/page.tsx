// Author: Rosalie Obeldobel

import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";
import SkillsSectionCoding from '@/components/skillssectioncoding';
import SkillsSectionDesign from '@/components/skillssectiondesign';

export default function AboutMePage() {
  return (
    <div className={styles.mainContent}>
      {/* Left Sidebar */}
      <MenuLeft />

      {/* Right Sidebar */}
      <MenuRight />

      {/* About Me */}
      <p className={styles.quote} style={{ marginTop: "300px" }}>
        Mein Ziel ist es, durch die Verbindung von Technik und Gestaltung Lösungen zu entwickeln, die Menschen helfen, statt sie zu behindern.
      </p>

      <div className={styles.imageTextContainer}>
        <img
          src="images/pfp.jpg"
          alt="Über Mich Design"
          className={styles.image}
        />
        <div className={styles.textContent}>
          <h1 className={styles.designHeader}>
            Über Mich
          </h1>
          <p className={styles.mediumText}>
            Ich bin Designerin mit einem starken Fokus auf barrierefreie, funktionale und nutzerzentrierte Gestaltung. 
            Meine Arbeitsweise ist strukturiert, detailorientiert und problemorientiert, sodass ich existierende Probleme finde 
            und Lösungen schrittweise entwickel. Ich kombiniere ästhetisches Gespür mit einem tiefen 
            Verständnis für Usability und Barrierefreiheit, um Interfaces, Produkte und visuelle Kommunikation zu entwickeln, 
            die Menschen begeistern und ihnen den Umgang erleichtern. Innovation, Kreativität und Teamfähigkeit treiben 
            meine Arbeit an, und ich lege großen Wert darauf, Designlösungen zu schaffen, die sowohl schön als auch funktional sind.
          </p>
        </div>
      </div>

      <div className={styles.imageTextContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.monoHeader}>
            Über Mich
          </h1>
          <p className={styles.mediumText}>
            Ich bin Informatikerin mit einem starken Fokus auf strukturierte Problemlösungen, effiziente Codeentwicklung 
            und benutzerfreundliches Design. Meine Arbeitsweise ist organisiert, lösungsorientiert und detailverliebt, 
            sodass ich Projekte zuverlässig von der Konzeption bis zur Umsetzung begleite. Ich kombiniere technisches Know-how 
            in Programmiersprachen, Datenbanken und Webtechnologien mit einem verständnisvollen Blick für Nutzerbedürfnisse und 
            zugängliches, inklusives Design. Es motiviert mich, digitale Lösungen zu schaffen, die Menschen helfen, 
            Prozesse vereinfachen und Barrieren abbauen. Kreativität, Präzision und Teamfähigkeit sind für mich die Grundlage 
            erfolgreicher Projekte, und ich strebe stets danach, innovative und nachhaltige Ergebnisse zu liefern.
          </p>
        </div>
        <img
          src="images/pfp.jpg"
          alt="Über Mich Informatik"
          className={styles.image}
        />
      </div>

      {/* Skills */}
      <p className={styles.quote}>
        Meine Projekte entstehen aus einem tiefen Verständnis für Nutzerbedürfnisse und technische Möglichkeiten.
      </p>

      <div className={styles.skillsLayout}>
        <div>
          <h2 className={styles.monoHeader}>Skills</h2>
          <SkillsSectionCoding />
        </div>
    
        <div>
          <h2 className={styles.designHeader}>Skills</h2>
          <SkillsSectionDesign />
        </div>
      </div>

      {/* Resume */}
      <p className={styles.quote}>
        Technik soll Menschen unterstützen, Aufgaben erleichtern und Barrieren abbauen.
      </p>
      <p className={styles.normalHeader} style={{ marginTop: "400px"}}>
        So neugierig...<br />
        Mehr findest du im
      </p>
      <p className={styles.monoHeader}>
        Lebenslauf:
      </p>

      <img 
        src="/icons/qrcode.png"
        alt="QR-Code"
          style={{
            width: "300px",
            height: "300px",
            marginLeft: "500px",
            marginTop: "100px",
            marginBottom: "300px",
          }}
      />

    </div>
  );
}
