import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Checkbox from "@/components/Input/TodoInput";
import { Tag } from "@/components/TagUI/Tags";
import { openEditModal, toggleCheckbox } from "@/utils/functions/taskFunctions";
import { TaskListProps } from "@/utils/interfaces/taskListProps";

const UpcomingTaskList: React.FC<TaskListProps> = ({
  tasks,
  setTasks,
  setSelectedTask,
  setIsEditModalOpen,
}) => {
  const waitingTasks = tasks.filter((task) => task.tag?.label === "Waiting");

  return (
    <>
      <Text>Upcoming Task</Text>
      <TaskListWrapper>
        {waitingTasks.map((task) => (
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
    </>
  );
};

const Text = styled.div`
  position: absolute;
  top: 60%;
  left: 37%;
  color: ${theme.color.gray60};
  font-size: ${theme.font.titleMedium.fontSize};
  font-weight: ${theme.font.titleMedium.fontWeight};
`;

const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 65%;
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

export default UpcomingTaskList;
