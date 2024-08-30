import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Checkbox from "@/components/Input/TodoInput";
import { Tag } from "@/components/TagUI/Tags";
import { openEditModal, toggleCheckbox } from "@/utils/functions/taskFunctions";
import { TaskListProps } from "@/utils/interfaces/taskListProps";

const OtherTaskList: React.FC<TaskListProps> = ({
  tasks,
  setTasks,
  setSelectedTask,
  setIsEditModalOpen,
}) => {
  return (
    <TaskListWrapper>
      {tasks.map((task) => (
        <TaskItem key={task.id}>
          <Checkbox
            isChecked={task.isChecked}
            onChange={() => toggleCheckbox(task.id, setTasks)}
          />
          <TaskTitle
            onClick={() =>
              openEditModal(task, setSelectedTask, setIsEditModalOpen)
            }>
            {task.title}
          </TaskTitle>
          {task.tag && (
            <Tag bgColor={task.tag.bgColor} textColor={task.tag.textColor}>
              {task.tag.label}
            </Tag>
          )}
        </TaskItem>
      ))}
    </TaskListWrapper>
  );
};

const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 26%;
`;

const TaskItem = styled.div`
  font-size: ${theme.font.titleMedium.fontSize};
  color: ${theme.color.black};
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 18px;
`;

const TaskTitle = styled.div``;

export default OtherTaskList;
