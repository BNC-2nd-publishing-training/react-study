// Task 생성창 이동 버튼

import React, { PropsWithChildren } from "react";
import { ModalDefaultType } from "@/utils/interfaces/ModalDefaultType";
import TaskModalLayout from "@/layouts/TaskModalLayout";

const AddTaskModal = ({
    onClickPlusButton,
    children,
}: PropsWithChildren<ModalDefaultType>) => {
    const handleBackClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (onClickPlusButton) {
            onClickPlusButton();
        }
    };

    return (
        <div>
            <TaskModalLayout>{children}</TaskModalLayout>
            <div onClick={handleBackClick} />
        </div>
    );
};

export default AddTaskModal;