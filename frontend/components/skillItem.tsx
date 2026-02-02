// Author: Rosalie Obeldobel

import styles from '@/app/page.module.css';

type SkillItemProps = {
  name: string;
  level: number; 
};

export default function SkillItem({ name, level }: SkillItemProps) {
    return(
        <div className={styles.skillItem}>
          <span className={styles.skillName}>{name}</span>
    
          <div className={styles.scale}>
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={
                  value <= level
                    ? styles.scaleDotActive
                    : styles.scaleDot
                }
              />
            ))}
          </div>
        </div>
    );
}