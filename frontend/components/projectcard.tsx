// Author: Rosalie Obeldobel

import styles from '@/app/page.module.css';
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  imageUrl: string;
};

export default function ProjectCard({ title, imageUrl }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <Link href={`/${title}`}>
        <div className={styles.imgWrapper}>
          <img 
            src={imageUrl} 
            alt={title} 
            className={styles.projectCardImage} />
        </div>
      </Link>
    </div>
  );
}
