export type TItemsData = {
  id: number;
  value: string;
};

export interface ISelectComponentProps {
  items: TItemsData[];
  placeholder?: string;
  handelChange: (value: string) => void;
  value: string;
}

export enum ESelect {
  SUBSCRIPTION = "Subscription",
  NOT_SUBSCRIPTION = "Not Subscription",
  OTHER = "Other",
}
