import { TodoTag } from '@/utils/interfaces/todoInterfaces';

export interface TagOption {
    value: TodoTag;
    label: TodoTag;
}

// Function to get tag options from TodoTag type
export const getTagOptions = (): TagOption[] => {
    const tags: TodoTag[] = ['Approved', 'In Progress', 'In Review', 'Waiting'];
    return tags.map(tag => ({
        value: tag,
        label: tag
    }));
};
