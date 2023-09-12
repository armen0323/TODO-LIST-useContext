import { FC, createContext, useState } from "react";

import styles from "./Container.module.scss";
import TodoInsert from "./TodoInsert";
import TodoData from "./TodoData";
import { ITodoData, TData } from "./types";

export const MyContextData = createContext<ITodoData>({});

const Container: FC = () => {
  const [data, setData] = useState<TData[]>(
    JSON.parse(localStorage.getItem("todos")!) || []
  );
  const [selectedRow, setSelectedRow] = useState<number>(0);

  const list: ITodoData = {
    data,
    setData,
    selectedRow,
    setSelectedRow,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <MyContextData.Provider value={list}>
          <div className={styles.wrapper__container__insert}>
            <TodoInsert />
          </div>
          <div className={styles.wrapper__container__data}>
            <TodoData />
          </div>
        </MyContextData.Provider>
      </div>
    </div>
  );
};
export default Container;
