import styles from "./blockwrapper.module.scss";

const BlockWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.block}>{children}</div>;
};

export default BlockWrapper;
