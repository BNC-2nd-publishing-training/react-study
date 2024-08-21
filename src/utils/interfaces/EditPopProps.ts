import { PopupProps } from '@/utils/interfaces/PopupType';

export interface EditPopProps extends PopupProps {
    task: {
        id: number;
        text: string;
        tag: string;
        check: boolean;
    };
}