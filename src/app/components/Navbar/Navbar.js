import React from "react";
import Link from "next/link";
import styles from "./navbar.module.scss"

export default function Navbar() {
  return (
    <header className={styles.parent}>
      <div className={styles.nav_container}>
        <span className="text-3xl">Микровидеохостинг</span>
        <nav className="flex space-x-6">
          <Link href="/" className={styles.nav_links}>
              Главная
          </Link>
          <Link href="/tags" className={styles.nav_links}>
              Теги
          </Link>
          <Link href="/upload" className={styles.nav_links}>
              Добавить видео
          </Link>
        </nav>
      </div>
    </header>
  );
};

