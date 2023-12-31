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
  const onChangeDep = React.useCallback((value: string) => {
    onChange(value);
    // console.log("Changed debounce:", value);
  }, [onChange]);
  const debouncedOnChanget = React.useMemo(() => {
    return debounce(onChangeDep, 1000);
  }, [onChangeDep]);

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
          debouncedOnChanget(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
