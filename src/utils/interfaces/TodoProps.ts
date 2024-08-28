import { Todo } from "./Todo";

export interface TodoProps{
    id?: string;
    text?: string;
    status?: string;
    todos?: Todo[]; 
    onClick?: () => void;
    selectedTodoId?: string;
    isSelected?: boolean;
}