export interface InputProps{
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    maxLangth?: number;
    height?: string;
}
