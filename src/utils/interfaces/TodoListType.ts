import { ListStatusType } from "./ListStatusType";

export interface ITodoListType {
  status: ListStatusType;
  label: string;
  isChecked: boolean;
}
