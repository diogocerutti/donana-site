"use client";

import { useState, useEffect } from "react";
import AdminHeader from "./_components/header/adminHeader";
import AdminSidebar from "./_components/sidebar/adminSidebar";
import styles from "./layout.module.css";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((previous) => !previous);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.adminLayout}>
      <AdminHeader />
      <AdminSidebar />
      <main className={styles.content}>{children}</main>
    </div>
  );
}
