import styles from './styles.module.css';

export default function Content() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>On7 Akademi</h1>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>DERSE KATILIM</h2>
        <button className={styles.button}>Derse Katıl</button>
      </div>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>DERSE KATILIM</h3>
        <button className={styles.button}>Derse Katıl</button>
      </div>
    </div>
  );
}
