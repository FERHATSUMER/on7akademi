import styles from "./styles.module.css";

export default function Sinavlar() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Sınavlar</h1>
      </div>
      <div className={styles.card}>
        <img
          src="https://media.istockphoto.com/id/1219382595/tr/vekt%C3%B6r/bir-tahtaya-yaz%C4%B1lan-matematik-denklemleri.jpg?s=612x612&w=0&k=20&c=KdDQ4aB9JdCGG-OBBB-9ESv3XuvcF5ZPiIgjCGA6YIc="
          alt="resim"
          className={styles.photo}
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

          <button className={styles.button}>Sınava Gir</button>
          <button className={styles.button}>Mazeret Bildir</button>
        </div>
      </div>
      <div className={styles.card}>
        <img
          src="https://media.istockphoto.com/id/1219382595/tr/vekt%C3%B6r/bir-tahtaya-yaz%C4%B1lan-matematik-denklemleri.jpg?s=612x612&w=0&k=20&c=KdDQ4aB9JdCGG-OBBB-9ESv3XuvcF5ZPiIgjCGA6YIc="
          alt="resim"
          className={styles.photo}
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

          <button className={styles.button}>Sınava Gir</button>
          <button className={styles.button}>Mazeret Bildir</button>
        </div>
      </div>
    </div>
  );
}
