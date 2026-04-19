// Author: Rosalie Obeldobel
import SkillItem from "@/components/skillItem"; 
import styles from '@/app/page.module.css';

export default function SkillsSectionCoding() {
  const skills = [
    { name: "HTML / CSS", level: 4 },
    { name: "JavaScript", level: 3 },
    { name: "React", level: 2 },
    { name: "Python", level: 4 },
    { name: "Node.js: Next.js / Express.js / REST-APIs", level: 3 },
  ];

  return (
    <section className={styles.skillsSection}>
        
      <h2 className={styles.monoHeader} style={{ marginBottom: '2rem' }}>Coding Skills</h2>
      
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