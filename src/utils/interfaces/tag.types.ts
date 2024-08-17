export type TagType = "Approved" | "In progress" | "In review" | "Waiting" | '';

export interface TagProps {
    type: TagType;
}
