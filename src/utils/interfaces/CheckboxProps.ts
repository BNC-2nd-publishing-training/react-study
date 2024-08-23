
export default interface CheckboxProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    label?: string;
    id: string;
}