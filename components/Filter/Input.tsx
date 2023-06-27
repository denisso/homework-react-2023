import React from "react";
import styles from "./input.module.scss";
import debounce from "@/utils/debounce";

type InputProps = {
  placeholder: string;
  value?: string;
  onBlur: () => void;
  onFocus: () => void;
  onChange: (value: string) => void;
};

const Input = ({
  placeholder,
  onChange,
  onBlur,
  onFocus,
  value,
}: InputProps) => {
  const [val, setVal] = React.useState(value ?? "");
  const [active, setActive] = React.useState(false);
  // const debounceChange = React.useCallback(
  //   (value: string) => {
  //     return debounce(() => onChange(value));
  //   },
  //   [onChange]
  // );
  const onBlurEvent = () => {
    setActive(false);
    onBlur();
  };
  const onFocusEvent = () => {
    setActive(true);
    onFocus();
  };
  return (
    <div className={`${styles.inputWrapper} ${active ? styles.active : ""}`}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onBlur={onBlurEvent}
        value={val}
        onFocus={onFocusEvent}
        onChange={(e) => {
          setVal(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
