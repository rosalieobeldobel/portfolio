// Author: Rosalie Obeldobel

import SkillItem from "@/components/skillItem";
import styles from '@/app/page.module.css';

export default function SkillsSectionDesign() {
  const skills = [
    { name: "Figma", level: 4 },
    { name: "UI / UX Design", level: 4 },
    { name: "Canva", level: 5 },
    { name: "Design Thinking", level: 4 },
    { name: "User Research / Testing", level: 5 },
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.skillsList}>
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
}
