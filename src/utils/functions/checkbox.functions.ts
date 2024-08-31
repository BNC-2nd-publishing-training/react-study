import { ChangeEvent } from 'react';

export const handleCheckBoxChange = (
    event: ChangeEvent<HTMLInputElement>, 
    onChange: (checked: boolean) => void
) => {
    onChange(event.target.checked);
};
