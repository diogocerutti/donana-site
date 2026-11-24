"use client";

import styles from "./adminHeader.module.css";
import logo from "@/public/img/logo.png";
import AdminNavigator from "../navigator/adminNavigator";
import { useState } from "react";
import Link from "next/link";

export default function AdminHeader({ sidebarOpen, onToggleSidebar }) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link
          href="/admin"
          onClick={() => setShowMobileHeader("none")}
          className={styles.logoLink}
        >
          <img
            src={logo.src}
            className={styles.logo}
            alt="Página Inicial ADM"
          />
          <p>ADMINISTRAÇÃO</p>
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          onClick={onToggleSidebar}
          aria-label={sidebarOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={sidebarOpen}
          aria-controls="admin-sidebar"
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
          <AdminNavigator />
        </div>

        <div className={`${styles.mobileHeader} ${isOpen ? styles.open : ""}`}>
          <AdminNavigator onNavigate={() => setShowMobileHeader("none")} />
        </div>
      </div>
    </header>
  );
}
