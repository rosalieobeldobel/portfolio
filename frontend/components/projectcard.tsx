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
        <img src={imageUrl} alt={title} className={styles.projectCardImage} />
        <h3 className={styles.bigText}>{title}</h3>
      </Link>
    </div>
  );
}
