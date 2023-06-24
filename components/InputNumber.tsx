"use client";
import React from "react";
import styles from "./inputnumber.module.scss";

const InputNumber = ({
  onInputChange,
}: {
  onInputChange?: (arg: number) => void;
}) => {
  const [num, setNum] = React.useState(0);
  const plus = () => setNum(num + 1);
  const minus = () => setNum(num > 0 ? num - 1 : num);
  React.useEffect(() => {
    if (onInputChange) onInputChange(num);
  }, [num, onInputChange]);
  return (
    <div className={styles.inputNumber}>
      <div className={styles.btn} onClick={minus}>
        -
      </div>
      <div className={styles.number}>{num}</div>
      <div className={styles.btn} onClick={plus}>
        +
      </div>
    </div>
  );
};

export default InputNumber;
