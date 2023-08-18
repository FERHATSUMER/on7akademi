import LessenInformation from "../lessenInformation/page";
import styles from "./sytles.module.css";
import Link from 'next/link';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineLogin } from 'react-icons/ai';
export default function Dersler() {
    
  return (
    <div>

      <div className={styles.cardInformation}>
        <LessenInformation />
      </div>
    </div>
  );
}
