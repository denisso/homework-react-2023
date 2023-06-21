import styles from "./inputnumber.module.scss";

const InputNumber = () => {
  return (
    <div className={styles.inputNumber}>
      <div className={styles.btn}>-</div>
      <div className={styles.number}>0</div>
      <div className={styles.btn}>+</div>
    </div>
  );
};

export default InputNumber;
