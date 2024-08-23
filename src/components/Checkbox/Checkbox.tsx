import React from 'react';
import styled from "@emotion/styled";
interface CheckboxProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    label?: string;
    id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, disabled = false, label, id }) => {
    return (
        <CheckboxContainer>
            <StyledCheckbox
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                id={id}
            />
            {label && <Label htmlFor={id}>{label}</Label>}
        </CheckboxContainer>
    );
};

// Checkbox.defaultProps = {
//     disabled: false,
//     label: '',
// };

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledCheckbox = styled.input`
    margin-right: 8px;
    cursor: pointer;
`;

const Label = styled.label`
    font-size: 14px;
    cursor: pointer;
`;

export default Checkbox;
