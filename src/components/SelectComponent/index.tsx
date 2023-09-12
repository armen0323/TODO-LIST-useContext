import type { FC } from "react";
import { MenuItem, FormControl, Select } from "@mui/material";

import type { ISelectComponentProps } from "./type";
import styles from "./SelectComponent.module.scss";

const SelectComponent: FC<ISelectComponentProps> = ({
  items,
  placeholder,
  value,
  handelChange,
}) => {
  const placeholderStyles = {
    "& .MuiSelect-select .notranslate::after": placeholder
      ? {
          content: `"${placeholder}"`,
          opacity: 0.42,
          color: "#e6f4ff",
        }
      : {},
  };
  const menuitems = items.map((element) => (
    <MenuItem
      key={element.id}
      value={element.value}
      className={styles.wrapper__select__container__menu}
      onClick={() => handelChange(element.value)}
    >
      {element.value}
    </MenuItem>
  ));

  return (
    <div className={styles.wrapper}>
      <FormControl className={styles.wrapper__select}>
        <Select
          notched
          value={value}
          variant="filled"
          className={styles.wrapper__select__container}
          sx={placeholderStyles}
        >
          {menuitems}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
