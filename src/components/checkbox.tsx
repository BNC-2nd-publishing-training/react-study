import React from 'react';
import CheckboxLayout from '@/layouts/checkbox.layout';
import { CheckboxProps } from '@/utils/interfaces/checkbox.types';

const Checkbox: React.FC<CheckboxProps> = (props) => {
    return <CheckboxLayout {...props} />;
};

export default Checkbox;
