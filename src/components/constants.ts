export type Status = "Approved" | "InReview" | "InProgress" | "Waiting";
export type AllStatus = "All"| Status;

export  const List: ListItem[] = [
  { id :1,title: "간지나게 숨쉬기", status: "Approved" },
  { id :2, title: "간지나게 숨쉬기", status: "InReview" },
  { id :3, title: "간지나게 숨쉬기", status: "Waiting" },
];
  
export interface ListItem {
  id: number;
  title: string;
  status: Status;
}