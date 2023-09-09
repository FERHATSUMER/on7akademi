import styles from "./styles.module.css";
import { FcVideoCall } from "react-icons/fc";
import { MdLiveTv } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";

export default function Content() {
  return (
    <div className={styles.container}>
      <h1 className={styles.contenth1}>On7 Akademi</h1>
      <div className={styles.contentInfoContainer}>
        <div className={styles.contentInfo}>
          <h2 className={styles.infoTitle}>Staj Eğtimi</h2>
          <div className={styles.infoButtonsContainer}>
            <button className={styles.infoButton}>
              <AiOutlineProfile /> Dosyalar
            </button>
            <button className={styles.infoButton}>
              <MdLiveTv /> Derse Katıl
            </button>
            <button className={styles.infoButton}>
              <FcVideoCall /> Kayıtlı Dersler
            </button>
          </div>
        </div>
        <div className={styles.contentInfo}>
          <h2 className={styles.infoTitle}>Staj Eğtimi2 </h2>
          <div className={styles.infoButtonsContainer}>
            <button className={styles.infoButton}>
              <AiOutlineProfile /> Dosyalar
            </button>
            <button className={styles.infoButton}>
              <MdLiveTv /> Derse Katıl
            </button>
            <button className={styles.infoButton}>
              <FcVideoCall /> Kayıtlı Dersler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
