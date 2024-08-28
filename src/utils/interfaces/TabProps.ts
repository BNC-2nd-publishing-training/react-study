export interface TabProps{
    text?: string;
    number?: number;
    isActive?: boolean;
    onClick?: () => void;  
    todos?: string[];
    count?: number;
}