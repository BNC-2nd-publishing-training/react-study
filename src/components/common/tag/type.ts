export type TagStatus = "approved" | "in-progress" | "in-review" | "waiting";

export interface TagProps {
  status: TagStatus;
}
