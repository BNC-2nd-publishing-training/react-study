// Task 체크박스 컴포넌트
// 체크박스가 나오지 않음, 기능 보완 필요 (중요!)

import React, { useState } from 'react';

interface CheckboxProps {
    name: string;
    value: string;
    checked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, value, checked = false }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <label>
            <input
            type="checkbox"
            name={name}
            value={value}
            checked={isChecked}
            onChange={handleChange}
            />
            {name}
        </label>
    );
};

export default Checkbox;