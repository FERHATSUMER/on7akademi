import  Content  from './content/page'
import Header from './header/page'
import Sidebar from './sidebar/page'
import styles from './page.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}><Header  /></div>
      <div className={styles.content}><Content /></div>
      <div className={styles.sidebar}><Sidebar /></div>
    </div>  

  )
}
