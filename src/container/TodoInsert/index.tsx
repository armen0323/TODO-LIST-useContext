import {
  type FC,
  type ChangeEvent,
  useContext,
  useState,
  FormEvent,
} from "react";

import {
  Input,
  CheckboxComponent,
  NumberInputComponent,
  SelectComponent,
  SwitchComponent,
} from "components";
import classNames from "classnames";

import styles from "./TodoInsert.module.scss";
import { EducationalData } from "../../components/SelectComponent/utils";

import { MyContextData } from "../index";

const TodoInsert: FC = () => {
  const { setData, data, selectedRow, setSelectedRow } =
    useContext(MyContextData);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [subscription, setSubscription] = useState<string>("");
  const [isEmployed, setIsEmployed] = useState<boolean>(false);

  const isInsert = name !== "" && age !== 0 && subscription !== "";

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isInsert) return;

    const newTodo = {
      id: Math.round(new Date().getTime()),
      name: name,
      age: age,
      subscription,
      employment: isEmployed ? "Employed" : "Unemployed",
    };

    if (setData && data) {
      const newData = [...data, newTodo];
      setData(newData);
      localStorage.setItem("todos", JSON.stringify(newData));
    }

    setName("");
    setAge(0);
    setSubscription("");
    setIsEmployed(false);
  };

  const handelDeleted = (value: number) => {
    if (data && setData && setSelectedRow) {
      const newData = data.filter((element) => element.id !== value);
      setData(newData);
      localStorage.setItem("todos", JSON.stringify(newData));

      setSelectedRow(0);
    }
  };

  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.wrapper__legend}>Insert Row</legend>
      <form className={styles.wrapper__inner} onSubmit={onSubmitHandler}>
        <Input
          value={name}
          placeholder="Name"
          handelChange={(event: ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
        <NumberInputComponent
          value={age}
          handelChange={(event: ChangeEvent<HTMLInputElement>) => {
            setAge(Number(event.target.value));
          }}
          handleIncrement={() => setAge((prev) => prev + 1)}
          handleDecrement={() => {
            if (age > 0) setAge((prev) => prev - 1);
          }}
        />
        <SelectComponent
          value={subscription}
          items={EducationalData}
          placeholder="select place"
          handelChange={(value: string) => setSubscription(value)}
        />
        <CheckboxComponent
          label="Employed"
          checked={isEmployed}
          handelChange={(event: ChangeEvent<HTMLInputElement>) =>
            setIsEmployed(event.target.checked)
          }
        />
        <button
          type="submit"
          className={classNames(styles.wrapper__inner__button, {
            [styles.disabled]: !isInsert,
          })}
        >
          Insert
        </button>
      </form>
      <hr />
      <SwitchComponent text="Mode" />
      <button
        className={classNames(styles.wrapper__inner__button, {
          [styles.disabled]: selectedRow === 0,
        })}
        onClick={() => {
          if (selectedRow) handelDeleted(selectedRow);
        }}
      >
        Delete
      </button>
    </fieldset>
  );
};
export default TodoInsert;
