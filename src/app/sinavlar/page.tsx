import styles from "./styles.module.css";

export default function Sinavlar() {
  return (
    <div className={styles.examsContainer}>
      <div className={styles.examsCardContainer}>
        <div className={styles.examsCard}>
          <img
            src="https://media.istockphoto.com/id/1219382595/tr/vekt%C3%B6r/bir-tahtaya-yaz%C4%B1lan-matematik-denklemleri.jpg?s=612x612&w=0&k=20&c=KdDQ4aB9JdCGG-OBBB-9ESv3XuvcF5ZPiIgjCGA6YIc="
            alt="resim"
            className={styles.examsPhoto}
          />
          <div className={styles.examsNitro}>
            <h1 className={styles.examsh1}>Matematik</h1>
            <h3 className={styles.examsh3}>Öğretmen Adı</h3>
            <h4 className={styles.examsh4}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
              cumque iure eaque culpa accusamus magnam autem incidunt aut
              aspernatur! Nihil eius recusandae voluptas nam fugiat similique
              facilis fuga et!
            </h4>
            <div className={styles.examsButtonContainer}>
              <button className={styles.examsButton}>Sınava Gir</button>
              <button className={styles.examsButton}>Mazeret Bildir</button>
            </div>
          </div>
        </div>
        <div className={styles.examsCard}>
          <img
            src="https://letgenbio.com/wp-content/uploads/2021/06/tuik-ilk-kez-acikladi-turkiyede-biyoteknoloji4b-1024x682.jpg"
            alt="resim"
            className={styles.examsPhoto}
          />
          <div className={styles.examsNitro}>
            <h1 className={styles.examsh1}>Biyoloji</h1>
            <h3 className={styles.examsh3}>Öğretmen Adı</h3>
            <h4 className={styles.examsh4}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
              cumque iure eaque culpa accusamus magnam autem incidunt aut
              aspernatur! Nihil eius recusandae voluptas nam fugiat similique
              facilis fuga et!
            </h4>
            <div className={styles.examsButtonContainer}>
              <button className={styles.examsButton}>Sınava Gir</button>
              <button className={styles.examsButton}>Mazeret Bildir</button>
            </div>
          </div>
        </div>
        <div className={styles.examsCard}>
          <img
            src="https://www.tech-worm.com/wp-content/uploads/2019/03/fatih-sultan-mehmet-fatih-unvanini-nasil-ve-ne-zaman-almistir.jpg"
            alt="resim"
            className={styles.examsPhoto}
          />
          <div className={styles.examsNitro}>
            <h1 className={styles.examsh1}>Tarih</h1>
            <h3 className={styles.examsh3}>Öğretmen Adı</h3>
            <h4 className={styles.examsh4}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
              cumque iure eaque culpa accusamus magnam autem incidunt aut
              aspernatur! Nihil eius recusandae voluptas nam fugiat similique
              facilis fuga et!
            </h4>
            <div className={styles.examsButtonContainer}>
              <button className={styles.examsButton}>Sınava Gir</button>
              <button className={styles.examsButton}>Mazeret Bildir</button>
            </div>
          </div>
        </div>

        <div className={styles.examsCard}>
          <img
            src="https://www.arttablo.com/upload/U-dunya-haritasitasi-ve-pusula-2-hd-goruntu-eski-cizim-dunya-haritasi-cografya-canvas-tablo1474464986-800.jpg"
            alt="resim"
            className={styles.examsPhoto}
          />
          <div className={styles.examsNitro}>
            <h1 className={styles.examsh1}>Coğrafya</h1>
            <h3 className={styles.examsh3}>Öğretmen Adı</h3>
            <h4 className={styles.examsh4}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
              cumque iure eaque culpa accusamus magnam autem incidunt aut
              aspernatur! Nihil eius recusandae voluptas nam fugiat similique
              facilis fuga et!
            </h4>
            <div className={styles.examsButtonContainer}>
              <button className={styles.examsButton}>Sınava Gir</button>
              <button className={styles.examsButton}>Mazeret Bildir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
