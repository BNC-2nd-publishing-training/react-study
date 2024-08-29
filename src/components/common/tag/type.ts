export type TagStatus = "Approved" | "In progress" | "In review" | "Waiting";

export interface TagProps {
  status: TagStatus;
}
