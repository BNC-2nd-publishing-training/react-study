export interface TodoProps{
    id?: string;
    text?: string;
    status?: string;
    todos?: any[];
    onClick?: () => void;
}