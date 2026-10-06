"use client";

import styles from "./header.module.css";
import logo from "../../../public/img/logo.png";
import Navigator from "../navigator/navigator";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showMobileHeader, setShowMobileHeader] = useState("none");
  const isOpen = showMobileHeader !== "none";

  const handleMobileHeader = () => {
    setShowMobileHeader((actual) => (actual === "none" ? "flex" : "none"));
  };

  return (
    <>
      <div className={styles.header}>
        <Link href="/#home" onClick={() => setShowMobileHeader("none")}>
          <img src={logo.src} className={styles.logo} alt="Página Inicial" />
        </Link>
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
          <Navigator />
        </div>
      </div>
      <div className={`${styles.mobileHeader} ${isOpen ? styles.open : ""}`}>
        <Navigator onNavigate={() => setShowMobileHeader("none")} />
      </div>
    </>
  );
}
