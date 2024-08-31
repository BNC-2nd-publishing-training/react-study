import React from "react";
import styled from "@emotion/styled";
import Tag from '@/components/tags';
import Checkbox from '@/components/checkbox';
import { TagType } from '@/utils/interfaces/tag.types';

interface TodoAddProps {
  tasks: { id: number; title: string; status: TagType }[];
  checkedStates: { [id: number]: boolean };
  onCheckboxChange: (id: number, checked: boolean) => void;
  onEditTask: (id: number, newTitle: string, newStatus: TagType) => void;
  onDeleteTask: (id: number) => void;
  openTaskModal: (id: number) => void; 
}

const TodoAdd: React.FC<TodoAddProps> = ({
  tasks,
  checkedStates,
  onCheckboxChange,
  openTaskModal
}) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [currentTaskId, setCurrentTaskId] = React.useState<number | null>(null);

  const handleTaskClick = (id: number) => {
    openTaskModal(id);
    setCurrentTaskId(id);
    setModalOpen(true);
  };

  return (
    <Container>
      {tasks.map(task => (
        <TaskItem key={task.id}>
          <CheckboxWrapper> 
            <Checkbox
              checked={checkedStates[task.id] || false}
              onChange={(checked) => onCheckboxChange(task.id, checked)}
            />
          </CheckboxWrapper>
          <TaskTitle onClick={() => handleTaskClick(task.id)}>
            {task.title}
          </TaskTitle>     
          <TagWrapper>
            <Tag type={task.status} />
          </TagWrapper>
        </TaskItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 10px;
  padding-bottom: 10px; 
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center; 
  margin-left: 20px;
  margin-right: 20px; 
`;

const TaskTitle = styled.span`
  cursor: pointer;
`;

const TagWrapper = styled.div`
  margin-left: auto; 
  margin-right: 20px;
`;

export default TodoAdd;
