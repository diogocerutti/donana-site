"use client";

import styles from "./header.module.css";
import logo from "../../../public/img/logo.png";
import HeaderItems from "./components/headerItems.js";
import { useState } from "react";

export default function Header() {
  const [showMobileHeader, setShowMobileHeader] = useState("none");
  const isOpen = showMobileHeader !== "none";

  const handleMobileHeader = () => {
    setShowMobileHeader((actual) => (actual === "none" ? "flex" : "none"));
  };

  return (
    <>
      <div className={styles.header}>
        <div>
          <img src={logo.src} className={styles.logo} />
        </div>
        <button
          type="button"
          onClick={handleMobileHeader}
          className={`${styles.menuButton} ${isOpen ? styles.open : ""}`}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          <svg
            className={styles.menuDrawing}
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path className={styles.topLine} d="M4 5h16" />
            <path className={styles.middleLine} d="M4 12h16" />
            <path className={styles.bottomLine} d="M4 19h16" />
          </svg>
        </button>
        <div className={styles.navbar}>
          <HeaderItems />
        </div>
      </div>
      <div className={`${styles.mobileHeader} ${isOpen ? styles.open : ""}`}>
        <HeaderItems />
      </div>
    </>
  );
}
