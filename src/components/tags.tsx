import React from "react";
import styles from "../styles/tags/tags.module.css";
import { theme } from "@/styles/theme"; 

type TagType = "Approved" | "In progress" | "In review" | "Waiting";

type TagProps = {
    type: TagType;
};

const getTagStyle = (type: TagType) => {
    switch (type) {
        case "Approved":
            return { backgroundColor: theme.color.primary10 };
        case "In progress":
            return { backgroundColor: theme.color.green10 };
        case "In review":
            return { backgroundColor: theme.color.red10 };
        case "Waiting":
            return { backgroundColor: theme.color.gray10 };
        default:
            return { backgroundColor: "transparent" };
    }
};

const getTextColor = (type: TagType) => {
    switch (type) {
        case "Approved":
            return { color: theme.color.primary20 };
        case "Waiting":
            return { color: theme.color.gray60 };
        default:
            return { color: "white" }; 
    }
};

const Tag: React.FC<TagProps> = ({ type }) => {
    const tagStyle = getTagStyle(type);
    const textColor = getTextColor(type);

    const displayText = (type === "Waiting") ? "Approved" : (type === "In progress" || type === "In review") ? "" : type;

    return (
        <div className={`${styles.tag}`} style={{ ...tagStyle, ...textColor }}>
            {displayText} 
        </div>
    );
};

export default Tag;
