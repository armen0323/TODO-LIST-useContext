import { FC } from "react";

import styles from "./switchComponent.module.scss";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material";
import { TSwitchProps } from "./types";
import useDarkMode from "../../hooks/useDarkMode";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "black",
    "&.Mui-focusVisible": {
      backgroundColor: "green",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "green",
  },
  "& .css-1yjjitx-MuiSwitch-track": {
    backgroundColor: "green",
  },
}));

const SwitchComponent: FC<TSwitchProps> = ({ text }) => {
  const { isDarkMode, updateActiveMode } = useDarkMode();

  console.log(isDarkMode, "dfghjk");

  return (
    <div className={styles.wrapper}>
      <PinkSwitch
        defaultChecked
        color="primary"
        onClick={updateActiveMode}
        checked={isDarkMode}
        inputProps={{ "aria-label": "Color switch demo" }}
      />
      {text && <p className={styles.wrapper__text}>{text}</p>}
    </div>
  );
};
export default SwitchComponent;
