import type { FC } from "react";

import { ChevronIcon } from "assets";

import styles from "./NumberInput.module.scss";
import type { TNumberInputProps } from "./types";
import classNames from "classnames";

const NumberInputComponent: FC<TNumberInputProps> = ({
  handelChange,
  value,
  handleIncrement,
  handleDecrement,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapper__buttons}>
      <button
        className={classNames(
          styles.wrapper__buttons__btn,
          styles.wrapper__buttons__btn__first
        )}
        onClick={handleIncrement}
      >
        <ChevronIcon />
      </button>
      <button
        className={styles.wrapper__buttons__btn}
        onClick={handleDecrement}
      >
        <ChevronIcon />
      </button>
    </div>
    <input
      type="number"
      className={styles.wrapper__input}
      placeholder="age"
      onChange={handelChange}
      value={value}
    />
  </div>
);
export default NumberInputComponent;
