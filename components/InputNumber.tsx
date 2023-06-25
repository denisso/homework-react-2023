"use client";
import React from "react";
import styles from "./inputnumber.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { plus, minus, selectCount } from "@/redux/features/cart";

const InputNumber = ({ movieId }: { movieId: string }) => {
  const { count } = useSelector(selectCount(movieId));
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(plus({ movieId }));
  };
  const handleMinus = () => {
    dispatch(minus({ movieId }));
  };

  return (
    <div className={styles.inputNumber}>
      <div className={styles.btn} onClick={handleMinus}>
        -
      </div>
      <div className={styles.number}>{count}</div>
      <div className={styles.btn} onClick={handlePlus}>
        +
      </div>
    </div>
  );
};

export default InputNumber;
