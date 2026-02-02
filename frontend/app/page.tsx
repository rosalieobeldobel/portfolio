// Author: Rosalie Obeldobel

import styles from './page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";

export default function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Left Sidebar */}
      <MenuLeft />

      {/* Right Sidebar */}
      <MenuRight />

      {/* PFP + Info Text */}
      <div
        style={{
          position: "relative",
          width: "600px",          
          height: "600px",         
          marginLeft: "300px",     
          marginRight: "300px",    
          marginTop: "80px",       
        }}
      >
        <img
          src="/images/pfp.jpg"
          alt="PFP"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        {/* Text über dem Bild */}
        <div
          style={{
            position: "absolute",
            top: "75px",          
            left: "81.5%",         
            width: "75%",
            height: "100%",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "20px", 
          }}
        >
          <h1 className={styles.designHeader}>Designerin</h1>
          <h1 className={styles.normalHeader}>+</h1>
          <h1 className={styles.monoHeader}>Informatikerin</h1>
          <p className={styles.mediumText}>Hallo, ich bin eine Studentin im 5. Semester 
            des Studienganges Informatik und Design an der Hochschule für angewandte Wissenschaften - München. <br /><br />
            Dieser Studiengang wurde in das Leben gerufen, weil oft ein Kommunikations- bzw. Verständnisproblem 
            zwischen Designer*innen und Informatiker*innen  exisitiert. Indem ich zum Einen lerne wie man 
            digitale Plattformen gestaltet und zum Anderen lerne wie man diese programmiert entwickele ich ein Verständnis 
            sowohl für den Designbereich als auch wie für den Informatikbereich. 
          </p>
        </div>
      </div>
    </div>
  );
}
