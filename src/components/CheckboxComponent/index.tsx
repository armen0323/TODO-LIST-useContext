import type { FC } from "react";
import { Checkbox } from "@mui/material";

import styles from "./Checkbox.module.scss";
import type { TCheckbox } from "./types";

const CheckBoxComponent: FC<TCheckbox> = ({ label, handelChange, checked }) => (
  <div className={styles.wrapper}>
    <Checkbox
      className={styles.wrapper__checkbox}
      style={{ color: "green" }}
      onChange={handelChange}
      checked={checked}
    />
    {label && <p className={styles.wrapper__label}>{label}</p>}
  </div>
);

export default CheckBoxComponent;
