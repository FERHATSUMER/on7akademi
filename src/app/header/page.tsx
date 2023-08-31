import styles from "./styles.module.css";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerRight}>
        <Link href="/">
          <img
            className={styles.logo}
            src="https://media.licdn.com/dms/image/C560BAQG50mwENt9gSQ/company-logo_400_400/0/1632727910976?e=2147483647&v=beta&t=0w36fnGQ37PWTm253SLL0PVTr2ziC_mzcyO71DlLIDc"
            alt="logo"
          />
        </Link>
        <h1 className={styles.headerTitle}>Ferhat Sümer</h1>
      </div>
      <nav>
        <div className={styles.navRight}>
          <FiSettings />
          <Link href="https://www.instagram.com/" target="_blank">
            <h4>Ayarlar</h4>
          </Link>
          <AiOutlineLogin />

          <Link href="https://www.instagram.com/" target="_blank">
            <h4>Çıkış Yap</h4>
          </Link>
        </div>
      </nav>
    </div>
  );
}
