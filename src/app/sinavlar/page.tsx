import informations from '../assets/page';
import styles from './styles.module.css';



export default function Sinavlar({info, content, title, image}) {
    return (
        <div>
        <div className={styles.cardContainer}>
          {informations.map((info, index) => (
            <div className={styles.card} key={index}>
              <img
                src={info.image}
                alt="resim"
                className="photo"
              />
              <div className={styles.nitro}>
                <h1 className={styles.h1}>{info.title}</h1>
                <h3 className={styles.h3}>Öğretmen Adı</h3>
                <h4 className={styles.h4}>
                  {info.content}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

