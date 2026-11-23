"use client";

import { useEffect, useState } from "react";
import { GlobalArrowLeft, GlobalArrowRight } from "@/components/svg/svg";
import { playfair } from "@/fonts/fonts";

import entrada from "@/public/img/entrada.jpeg";
import entradacx from "@/public/img/entradacx.jpeg";
import palhas from "@/public/img/palhas.jpeg";
import balcoespas from "@/public/img/balcoespas.jpeg";
import products from "@/public/img/products.png";

import styles from "./carousel.module.css";

const images = [
  { src: entrada.src },
  { src: entradacx.src },
  { src: palhas.src },
  { src: balcoespas.src },
  { src: products.src },
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
      <p className={`${styles.caption} ${playfair.className}`}>
        Tradição e Qualidade desde 1991
      </p>
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
