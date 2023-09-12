import type { FC } from "react";

import { TInputProps } from "./types";
import styles from "./Input.module.scss";

const Input: FC<TInputProps> = ({ placeholder, handelChange,value }) => {
  return (
    <input
      className={styles.wrapper}
      type="text"
      placeholder={placeholder}
      onChange={handelChange}
      value={value}
    />
  );
};

export default Input;
