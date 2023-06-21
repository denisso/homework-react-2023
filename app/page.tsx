import styles from "./page.module.scss";
import Filter from "@/components/Filter";
import Movies from "@/components/Movies";

export default function Home() {
  return (
    <div className={styles.block}>
      <div className={styles.leftSide}><Filter /></div>
      <div className={styles.rightSide}><Movies /></div>
    </div>
  );
}
