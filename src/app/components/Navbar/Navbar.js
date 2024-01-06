import Link from "next/link";
import styles from "./navbar.module.scss"

export default function Navbar() {
  return (
    <header className={styles.parent}>
      <div className={styles.nav_container}>
        <Link href="/" className={styles.site_name}>Микровидеохостинг</Link>
        <nav className={styles.nav_itself}>
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

