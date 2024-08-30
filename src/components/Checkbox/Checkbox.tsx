import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

function Checkboxs() {
    const [checkedTasks, setCheckedTasks] = React.useState<Set<number>>(new Set()); 

    const handleCheckboxChange = (taskId: number) => {
        setCheckedTasks(prevCheckedTasks => {
            const newCheckedTasks = new Set(prevCheckedTasks);
            if (newCheckedTasks.has(taskId)) {
                newCheckedTasks.delete(taskId);
            } else {
                newCheckedTasks.add(taskId);
            }
            return newCheckedTasks;
        });
    };

    return (
        <Checkbox
            type="checkbox"
            checked={checkedTasks.has(task.id)}
            onChange={() => handleCheckboxChange(task.id)}
        />
    )
};

const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    margin-left: -10px;
    margin-right: 10px;

    accent-color: ${theme.color.primary20};
`;

export default Checkboxs;