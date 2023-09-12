import { Dispatch, SetStateAction } from "react";

export type TData = {
  id: number;
  name: string;
  age: number;
  subscription: string;
  employment: string;
};

export interface ITodoData {
  data?: TData[];
  setData?: Dispatch<SetStateAction<TData[]>>;
  selectedRow?: number;
  setSelectedRow?: Dispatch<SetStateAction<number>>;
}
