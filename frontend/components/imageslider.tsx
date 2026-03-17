"use client";

import { useState } from "react";
import Image from "next/image";
import styles from '@/app/page.module.css';

export default function ImageSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderFrame}>
        <Image
          src={images[current]}
          alt={`Slide ${current}`}
          width={900}
          height={600}
          className={styles.sliderImage}
        />
      </div>

      <div className={styles.sliderControls}>
        <button onClick={prevSlide} className={styles.sliderButton}>
          ←
        </button>

        <span className={styles.sliderCounter}>
          {current + 1} / {images.length}
        </span>

        <button onClick={nextSlide} className={styles.sliderButton}>
          →
        </button>
      </div>
    </div>
  );
}