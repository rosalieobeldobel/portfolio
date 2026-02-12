// Author: Rosalie Obeldobel

import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";
import ProjectCard from "@/components/projectcard";

export default function ProjectsPage() {
  const projects = [
    { title: "MOIA", imageUrl: "/images/moia.jpeg" },
    { title: "Hikikomori" , imageUrl: "/images/hikikomori.png" },
    { title: "HANGMAN", imageUrl: "/images/hangman.png" },
    { title: "R.E.S.", imageUrl: "/images/res.png" },
    { title: "MingaTrends", imageUrl: "/images/mingatrends.png" },
    { title: "Renshuu", imageUrl: "/images/renshuu.png" },
  ];

  return (
    <div className={styles.projectContainer}>
      {/* Left Sidebar */}
      <MenuLeft />

      {/* Right Sidebar */}
      <MenuRight />

      {/* Project Grid */}
      <main className={styles.mainContent}>
        <div className={styles.projectGrid}>
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} imageUrl={p.imageUrl} />
           ))}
        </div>
      </main>
    </div>
  );
}
