import { useState, useEffect } from "react";
import Modal from "@/components/common/modal";
import TextArea from "@/components/common/TextArea";
import SelectBox from "@/components/common/SelectBox";
import { CreateTodoModalProps } from "./type";
import { TagStatus } from "@/components/common/tag/type";
import Button from "@/components/common/button";
import { Todo } from "@/components/common/todoitem/type";
import { theme } from "@/styles/theme";
import * as S from "./style";

const statusList: TagStatus[] = [
  "In review",
  "In progress",
  "Approved",
  "Waiting",
];

const CreateTodoModal = ({
  createTodoModal,
  setCreateTodoModal,
  createTodo,
}: CreateTodoModalProps) => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoStatus, setTodoStatus] = useState<TagStatus | null>(null);
  const [todoId, setTodoId] = useState<number>(1);

  const handleCreateTask = () => {
    if (todoTitle.trim() && todoStatus?.trim()) {
      const task: Todo = {
        id: todoId,
        text: todoTitle,
        completed: false,
        status: todoStatus,
      };

      createTodo(task);
      setTodoId((todoId) => todoId + 1);
      setCreateTodoModal(false);
    }
  };

  useEffect(() => {
    if (!createTodoModal) {
      setTodoTitle("");
      setTodoStatus(null);
    }
  }, [createTodoModal]);

  return (
    <Modal isOpen={createTodoModal} setModal={setCreateTodoModal}>
      <S.Container>
        <S.Header>Create Task</S.Header>
        <S.Form>
          <TextArea
            placeholder="Task 제목을 입력해주세요"
            value={todoTitle}
            onChange={setTodoTitle}
          />
          <SelectBox
            placeholder="Task의 상태를 선택해주세요"
            options={statusList}
            selectedValue={todoStatus}
            onChange={(value: TagStatus) => setTodoStatus(value)}
          />
        </S.Form>
        <Button
          onClick={handleCreateTask}
          disabled={!todoTitle || !todoStatus}
          text="Task 추가하기"
          width="480px"
          height="50px"
          color={theme.color.primary20}
        />
      </S.Container>
    </Modal>
  );
};

export default CreateTodoModal;
