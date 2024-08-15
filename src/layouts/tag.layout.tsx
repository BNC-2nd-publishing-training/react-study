import React from 'react';
import { TagProps } from '@/utils/interfaces/tag.types';
import { getTagStyle, getTextColor } from '@/utils/functions/tag.functions';
import styles from '@/styles/tags/tags.module.css';

const TagLayout: React.FC<TagProps> = ({ type }) => {
    const tagStyle = getTagStyle(type);
    const textColor = getTextColor(type);

    // "Waiting" 타입일 때 텍스트를 "Approved"로 대체
    const displayText = (type === "Waiting") ? "Approved" : 
                        (type === "In progress" || type === "In review") ? "" : 
                        type;

    return (
        <div className={`${styles.tag}`} style={{ ...tagStyle, ...textColor }}>
            {displayText}
        </div>
    );
};

export default TagLayout;
