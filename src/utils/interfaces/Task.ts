export interface Task {
  id: number;
  title: string;
  tag: {
    label: string;
    bgColor: string;
    textColor: string;
  } | null;
  isChecked: boolean;
}
