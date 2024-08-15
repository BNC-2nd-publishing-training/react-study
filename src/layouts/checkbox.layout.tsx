import React from 'react';
import { CheckboxProps } from '@/utils/interfaces/checkbox.types';
import { handleCheckBoxChange } from '@/utils/functions/checkbox.functions';
import { Icon } from '@iconify/react';
import checkIcon from '@iconify-icons/mdi/check';
import styles from '../styles/checkbox/checkbox.module.css'

const CheckboxLayout: React.FC<CheckboxProps> = ({ checked, onChange }) => (
    <label className={styles.checkboxContainer}>
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => handleCheckBoxChange(e, onChange)}
            className={styles.checkbox}
        />
        <span className={`${styles.customCheckbox} ${checked ? styles.checked : ''}`}>
            {checked && (
                <Icon icon={checkIcon} className={styles.checkIcon} />
            )}
        </span>
    </label>
);

export default CheckboxLayout;
