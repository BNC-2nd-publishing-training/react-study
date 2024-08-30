import React from 'react';
import { TagProps } from '@/utils/interfaces/tag.types';
import { getTagStyle, getTextColor } from '@/utils/functions/tag.functions';
import styles from '@/styles/tags/tags.module.css';

const TagLayout: React.FC<TagProps> = ({ type }) => {
    const tagStyle = getTagStyle(type);
    const textColor = getTextColor(type);

    let displayText;
    switch (type) {
        case "Waiting":
            displayText = "Waiting";
            break;
        case "In progress":
            displayText = "In progress";
            break;
        case "In review":
            displayText = "In review";
            break;
        default:
            displayText = type;
            break;
    }

    return (
        <div className={`${styles.tag}`} style={{ ...tagStyle, ...textColor }}>
            {displayText}
        </div>
    );
};

export default TagLayout;
