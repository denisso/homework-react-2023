import styles from "./page.module.scss";
import Filter from "@/components/Filter";
import Movies from "@/components/Movies";
import BlockWrapper from "@/components/BlockWrapper";
export default function Home() {
  return (
    <div className={styles.block}>
      <BlockWrapper className={styles.leftSide}>
        <Filter />
      </BlockWrapper>
      <div className={styles.rightSide}>
        <Movies />
      </div>
    </div>
  );
}
