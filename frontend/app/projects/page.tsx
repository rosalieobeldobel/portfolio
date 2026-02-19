// Author: Rosalie Obeldobel

import styles from '@/app/page.module.css';
import MenuLeft from "@/components/menuleft";
import MenuRight from "@/components/menuright";
import ProjectCard from "@/components/projectcard";

export default function ProjectsPage() {
  const projects = [
    { title: "MOIA", imageUrl: "/graphics/column_moia.png" },
    { title: "Hikikomori" , imageUrl: "/graphics/column_hikikomori.png" },
    { title: "HANGMAN", imageUrl: "/graphics/column_hangman.png" },
    { title: "R.E.S.", imageUrl: "/graphics/column_res.png" },
    { title: "MingaTrends", imageUrl: "/graphics/column_mingatrends.png" },
    { title: "Renshuu", imageUrl: "/graphics/column_renshuu.png" },
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
