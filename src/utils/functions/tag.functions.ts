import { theme } from '@/styles/theme';
import { TagType } from '../interfaces/tag.types';

export const getTagStyle = (type: TagType) => {
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

export const getTextColor = (type: TagType) => {
    switch (type) {
        case "Approved":
            return { color: theme.color.primary20 };
        case "In progress":
            return { color: theme.color.green30 };
        case "In review":
            return { color: theme.color.red30 };
        case "Waiting":
            return { color: theme.color.gray60 };
        default:
            return { color: "white" };
    }
};
