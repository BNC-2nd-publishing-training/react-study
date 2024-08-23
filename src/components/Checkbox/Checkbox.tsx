// Checkbox 컴포넌트

import React from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

import CheckboxProps from "@/utils/interfaces/CheckboxProps";

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
    font-size: ${theme.font.textMedium.fontSize};
    cursor: pointer;
`;

export default Checkbox;
