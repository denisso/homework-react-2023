import styles from "./field.module.scss";

const Field = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  return (
    <div className={styles.field}>
      <div className={styles.name}>{name}</div>
      <div className={styles.component}>{children}</div>
    </div>
  );
};

export default Field;
