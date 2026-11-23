"use client";

import styles from "./sobre-nos.module.css";

import donana from "../../../public/img/fachada-nova.jpeg";
import sepiso from "../../../public/img/2piso.jpeg";
import balcao from "../../../public/img/balcao.jpeg";
import interno from "../../../public/img/interno.jpeg";
import interno2 from "../../../public/img/interno2.jpeg";
import interno3 from "../../../public/img/interno3.jpeg";
import interno4 from "../../../public/img/interno4.jpeg";
import interno5 from "../../../public/img/interno5.jpeg";
import entrada from "../../../public/img/entrada.jpeg";

import { playfair } from "../../fonts/fonts";
import { GlobalTitle, GlobalSubtitle } from "@/components/text/text";
import { GlobalArrowLeft, GlobalArrowRight } from "@/components/svg/svg";
import { RiZoomInFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const images = [
  {
    src: donana.src,
  },
  { src: sepiso.src },
  { src: balcao.src },
  { src: interno.src },
  { src: interno2.src },
  { src: interno3.src },
  { src: interno4.src },
  { src: interno5.src },
  { src: entrada.src },
];

export default function SobreNos() {
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
        <GlobalTitle title="Sobre Nós" />
        <GlobalSubtitle subtitle="Somos uma empresa que visa o melhor para o cliente, com qualidade no serviço e atendimento. Deixando seus eventos mais deliciosos com nossos produtos." />
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
        <div className={styles.zoomImages}>
          {images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={`Foto do ambiente ${index + 1}`}
              aria-hidden={index !== currentIndex}
              className={`${styles.imageZoom} ${
                index === currentIndex ? styles.active : ""
              }`}
            />
          ))}
        </div>
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
