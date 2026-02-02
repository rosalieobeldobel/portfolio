// Author: Rosalie Obeldobel

import SkillItem from "@/components/skillItem";
import styles from '@/app/page.module.css';

export default function SkillsSectionCoding() {
  const skills = [
    { name: "HTML / CSS", level: 4 },
    { name: "JavaScript", level: 3 },
    { name: "React / Next.js", level: 2 },
    { name: "Python", level: 4 },
    { name: "Express.js / REST-APIs", level: 2 },
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
