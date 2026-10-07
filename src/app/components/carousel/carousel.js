"use client";

import { useEffect, useState } from "react";
import { GlobalArrowLeft, GlobalArrowRight } from "@/components/svg/svg";

import carousel1 from "../../../../public/img/inside.png";
import carousel2 from "../../../../public/img/balcony.png";
import carousel3 from "../../../../public/img/buffet.png";
import carousel4 from "../../../../public/img/buffet2.png";
import carousel5 from "../../../../public/img/products.png";
import carousel6 from "../../../../public/img/products2.png";

import styles from "./carousel.module.css";

const images = [
  { src: carousel1.src },
  { src: carousel2.src },
  { src: carousel3.src },
  { src: carousel4.src },
  { src: carousel5.src },
  { src: carousel6.src },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  const changeImage = (direction) => {
    setCurrentIndex(
      (current) => (current + direction + images.length) % images.length,
    );
  };

  return (
    <section className={styles.carousel}>
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt=""
          aria-hidden={index !== currentIndex}
          className={`${styles.carouselImg} ${
            index === currentIndex ? styles.active : ""
          }`}
        />
      ))}
      <p className={styles.caption}>Tradição e Qualidade desde 1991</p>
      <button
        type="button"
        className={`${styles.arrowButton} ${styles.previous}`}
        onClick={() => changeImage(-1)}
        aria-label="Imagem anterior"
      >
        <GlobalArrowLeft />
      </button>
      <button
        type="button"
        className={`${styles.arrowButton} ${styles.next}`}
        onClick={() => changeImage(1)}
        aria-label="Próxima imagem"
      >
        <GlobalArrowRight />
      </button>
    </section>
  );
}
