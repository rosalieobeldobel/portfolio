// Author: Rosalie Obeldobel
"use client";

import { useEffect, useRef } from "react";
import styles from '@/app/page.module.css';

interface VideoOnScrollProps {
  src: string;
}

export default function VideoOnScroll({ src }: VideoOnScrollProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(err => console.log("Autoplay blocked:", err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        className={styles.scrollVideo}
      />
    </div>
  );
}