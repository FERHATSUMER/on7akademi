import styles from "./styles.module.css";
import informations from "../assets/page";
import Header from "../header/page";

export default function LessenInformation() {
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src="https://media.istockphoto.com/id/1219382595/tr/vekt%C3%B6r/bir-tahtaya-yaz%C4%B1lan-matematik-denklemleri.jpg?s=612x612&w=0&k=20&c=KdDQ4aB9JdCGG-OBBB-9ESv3XuvcF5ZPiIgjCGA6YIc="
            alt="resim"
            className="photo"
          />
          <div className={styles.nitro}>
            <h1 className={styles.h1}>Matematik</h1>
            <h3 className={styles.h3}>Öğretmen Adı</h3>
            <h4 className={styles.h4}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
              cumque iure eaque culpa accusamus magnam autem incidunt aut
              aspernatur! Nihil eius recusandae voluptas nam fugiat similique
              facilis fuga et!
            </h4>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://letgenbio.com/wp-content/uploads/2021/06/tuik-ilk-kez-acikladi-turkiyede-biyoteknoloji4b-1024x682.jpg"
            alt="resim"
            className="photo"
          />
          <div className={styles.nitro}>
            <h1 className={styles.h1}>Biyoloji</h1>
            <h3 className={styles.h3}>Öğretmen Adı</h3>
            <h4 className={styles.h4}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
              cumque iure eaque culpa accusamus magnam autem incidunt aut
              aspernatur! Nihil eius recusandae voluptas nam fugiat similique
              facilis fuga et!
            </h4>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://www.tech-worm.com/wp-content/uploads/2019/03/fatih-sultan-mehmet-fatih-unvanini-nasil-ve-ne-zaman-almistir.jpg"
            alt="resim"
            className="photo"
          />
          <div className={styles.nitro}>
            <h1 className={styles.h1}>Tarih</h1>
            <h3 className={styles.h3}>Öğretmen Adı</h3>
            <h4 className={styles.h4}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
              cumque iure eaque culpa accusamus magnam autem incidunt aut
              aspernatur! Nihil eius recusandae voluptas nam fugiat similique
              facilis fuga et!
            </h4>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://www.cumhuriyet.com.tr/Archive/2021/2/13/1813381/kapak_002828.jpg"
            alt="resim"
            className="photo"
          />
          <div className={styles.nitro}>
            <h1 className={styles.h1}>Edebiyat</h1>
            <h3 className={styles.h3}>Öğretmen Adı</h3>
            <h4 className={styles.h4}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
              cumque iure eaque culpa accusamus magnam autem incidunt aut
              aspernatur! Nihil eius recusandae voluptas nam fugiat similique
              facilis fuga et!
            </h4>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://www.arttablo.com/upload/U-dunya-haritasitasi-ve-pusula-2-hd-goruntu-eski-cizim-dunya-haritasi-cografya-canvas-tablo1474464986-800.jpg"
            alt="resim"
            className="photo"
          />
          <div className={styles.nitro}>
            <h1 className={styles.h1}>Coğrafya</h1>
            <h3 className={styles.h3}>Öğretmen Adı</h3>
            <h4 className={styles.h4}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
              cumque iure eaque culpa accusamus magnam autem incidunt aut
              aspernatur! Nihil eius recusandae voluptas nam fugiat similique
              facilis fuga et!
            </h4>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://www.bilimseldunya.com/wp-content/uploads/2022/03/Fizik-Nedir.jpg"
            alt="resim"
            className="photo"
          />
          <div className={styles.nitro}>
            <h1 className={styles.h1}>Fizik</h1>
            <h3 className={styles.h3}>Öğretmen Adı</h3>
            <h4 className={styles.h4}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
              cumque iure eaque culpa accusamus magnam autem incidunt aut
              aspernatur! Nihil eius recusandae voluptas nam fugiat similique
              facilis fuga et!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
