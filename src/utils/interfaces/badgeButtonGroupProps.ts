export interface badgeButtonGroupProps {
  totalTasksCount: number;
  selectedTag: string;
  onButtonClick: (tag: string) => void;
}
