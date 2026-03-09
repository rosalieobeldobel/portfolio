"use client";

import { useEffect, useRef } from "react";

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
            video.play();
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
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      style={{
        width: "100%",
        marginTop: "150px",
        display: "block",
      }}
    />
  );
}
