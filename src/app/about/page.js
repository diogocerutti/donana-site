"use client";

import styles from "./about.module.css";

import evento from "../../../public/img/evento.png";
import evento2 from "../../../public/img/evento2.png";
import mesas from "../../../public/img/mesas.png";
import ambiente from "../../../public/img/ambiente.png";

import { playfair } from "../../fonts/fonts";
import { GlobalTitle, GlobalSubtitle } from "@/components/text/text";
import { RiZoomInFill } from "react-icons/ri";
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
  const [currentSrc, setCurrentSrc] = useState();
  const [openZoomBox, setOpenZoomBox] = useState("none");

  const handleOpenZoomBox = (imageSrc) => {
    setOpenZoomBox((actual) => (actual === "none" ? "flex" : "none"));
    setCurrentSrc(imageSrc);
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
            className={styles.aboutButton}
            onClick={() => handleOpenZoomBox(image.src)}
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
        <img src={currentSrc} className={styles.imageZoom} />
      </div>
    </div>
  );
}
