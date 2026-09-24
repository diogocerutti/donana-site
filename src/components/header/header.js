"use client";

import styles from "./header.module.css";
import logo from "../../../public/img/logo.png";
import menu from "../../../public/img/menu.png";
import HeaderItems from "./components/headerItems.js";
import { useState } from "react";

export default function Header() {
  const [showMobileHeader, setShowMobileHeader] = useState("none");
  const [showCloseButton, setShowCloseButton] = useState("none");

  const handleMobileHeader = () => {
    setShowMobileHeader((actual) => (actual === "none" ? "flex" : "none"));
  };

  return (
    <>
      <div className={styles.header}>
        <div>
          <img src={logo.src} className={styles.logo} />
        </div>
        <div onClick={handleMobileHeader}>
          <img src={menu.src} className={styles.menu} />
        </div>
        <div className={styles.navbar}>
          <HeaderItems />
        </div>
      </div>
      <div
        className={styles.mobileHeader}
        style={{ display: showMobileHeader }}
      >
        asdasd
      </div>
    </>
  );
}
