export interface TabProps{
    text?: string;
    number?: number;
    isActive?: boolean;
    onClick?: () => void;  
    todos?: any[];
    count?: number;
}