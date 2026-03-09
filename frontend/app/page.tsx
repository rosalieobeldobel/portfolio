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
          src="/graphics/pfp.jpeg"
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
            top: "65px",          
            left: "75%",         
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
          <p className={styles.mediumText}>Hallo, ich bin eine Studentin im 6. Semester 
            des Studienganges Informatik und Design an der Hochschule für angewandte Wissenschaften - München. <br /><br />
            Der Studiengang entstand aus dem häufigen Kommunikations- und Verständnisproblem zwischen Designer*innen 
            und Informatiker*innen. Durch meine Fähigkeiten in beiden Disziplinen fungiere ich als Schnittstelle die 
            nutzerzentrierte Gestaltung mit technischer Umsetzung verbindet. Entscheidungen im Prozess treffe ich problemorientiert und unabhängig von 
            persönlichen Präferenzen.
          </p>
        </div>
      </div>
    </div>
  );
}
