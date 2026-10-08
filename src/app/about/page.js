"use client";

import styles from "./about.module.css";

import evento from "../../../public/img/evento.png";
import evento2 from "../../../public/img/evento2.png";
import mesas from "../../../public/img/mesas.png";
import ambiente from "../../../public/img/ambiente.png";

import { playfair } from "../../fonts/fonts";
import { GlobalTitle, GlobalSubtitle } from "@/components/text/text";
import { GlobalArrowLeft, GlobalArrowRight } from "@/components/svg/svg";
import { RiZoomInFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const images = [
  {
    src: evento.src,
  },
  { src: evento2.src },
  { src: mesas.src },
  { src: ambiente.src },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openZoomBox, setOpenZoomBox] = useState("none");

  const handleZoomBox = (index) => {
    setOpenZoomBox((actual) => (actual === "none" ? "flex" : "none"));
    setCurrentIndex(index);
  };

  const changeImage = (direction) => {
    setCurrentIndex(
      (current) => (current + direction + images.length) % images.length, // % -> resto da divisão
    );
  };

  return (
    <div className={styles.about}>
      <div className={styles.text}>
        <GlobalTitle title={"Sobre Nós"} />
        <GlobalSubtitle
          subtitle={
            "Somos uma empresa que visa o melhor para o cliente, com qualidade no serviço e atendimento. Deixando seus eventos mais deliciosos com nossos produtos."
          }
        />
        <div className={`${styles.description} ${playfair.className}`}>
          <p className={styles.descTitle}>Nosso Ambiente</p>
          <p className={styles.descSubtitle}>Momentos Don'Ana</p>
        </div>
      </div>
      <div className={styles.aboutBox}>
        {images.map((image, index) => (
          <button
            key={image.src}
            className={styles.zoomButton}
            onClick={() => handleZoomBox(index)}
          >
            {" "}
            <div className={styles.imageBox}>
              <RiZoomInFill className={styles.zoomIcon} />
              <img src={image.src} alt={image.name} className={styles.image} />
            </div>
          </button>
        ))}
      </div>
      <div style={{ display: openZoomBox }} className={styles.zoomBox}>
        <button
          className={styles.closeButton}
          onClick={() => setOpenZoomBox("none")}
        >
          <IoMdClose size={40} />
        </button>
        <button
          type="button"
          className={`${styles.arrowButton} ${styles.previous}`}
          aria-label="Imagem anterior"
          onClick={() => changeImage(-1)}
        >
          <GlobalArrowLeft />
        </button>
        <img src={images[currentIndex].src} className={styles.imageZoom} />
        <button
          type="button"
          className={`${styles.arrowButton} ${styles.next}`}
          aria-label="Próxima imagem"
          onClick={() => changeImage(1)}
        >
          <GlobalArrowRight />
        </button>
      </div>
    </div>
  );
}
