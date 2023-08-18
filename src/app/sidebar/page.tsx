import Link from "next/link";
import { PiBooks, PiExamLight } from "react-icons/pi";
import styles from "./styles.module.css";
export default function Sidebar() {
  return (
    <div>
      <div className={styles.sidebarHeader}>
        <img
          className={styles.sidebarLogo}
          src="https://media.licdn.com/dms/image/C560BAQG50mwENt9gSQ/company-logo_400_400/0/1632727910976?e=2147483647&v=beta&t=0w36fnGQ37PWTm253SLL0PVTr2ziC_mzcyO71DlLIDc"
          alt="logo"
        />
        <h3 className={styles.sidebarTitle}>Kullanıcı Paneli</h3>
      </div>
      <div className={styles.sidebarMenu}>
        <div className={styles.sidebarMenuItem}>
          <PiBooks />
          <Link href="/dersler">
            <h4> Dersler</h4>
          </Link>

          <PiExamLight />
          <Link href="/sinavlar">
          <h4>Sınavlar</h4>
          </Link>
         

        </div>
      </div>
    </div>
  );
}
