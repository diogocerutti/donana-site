"use client";

import styles from "./admSidebar.module.css";

export default function AdminSidebar() {
  return (
    <div className={styles.adminSidebar}>
      <div className={styles.items}>
        <p>DADOS DA EMPRESA</p>
        <p>VALORES</p>
        <p>LOCALIZAÇÃO</p>
        <p>MENU</p>
        <p>SOBRE</p>
      </div>
    </div>
  );
}
