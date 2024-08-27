import { useState, useEffect } from "react";
import Modal from "@/components/common/modal";
import TextArea from "@/components/common/TextArea";
import SelectBox from "@/components/common/SelectBox";
import { UpdateTodoModalProps } from "./type";
import { TagStatus } from "@/components/common/tag/type";
import Button from "@/components/common/button";
import { Todo } from "@/components/common/todoitem/type";
import * as S from "./style";
import { theme } from "@/styles/theme";

const statusList: TagStatus[] = [
  "In review",
  "In progress",
  "Approved",
  "Waiting",
];

const UpdateTodoModal = ({
  updateTodoModal,
  setUpdateTodoModal,
  selecteTodo,
  updateTodo,
  deleteTodo,
}: UpdateTodoModalProps) => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoStatus, setTodoStatus] = useState<TagStatus | null>(null);

  useEffect(() => {
    if (selecteTodo) {
      setTodoTitle(selecteTodo.text);
      setTodoStatus(selecteTodo.status);
    }
  }, [selecteTodo]);

  const handleUpdateTask = () => {
    if (todoTitle.trim() && todoStatus?.trim() && selecteTodo) {
      const updatedTodo: Todo = {
        ...selecteTodo,
        text: todoTitle,
        status: todoStatus,
      };
      updateTodo(updatedTodo);
      setUpdateTodoModal(false);
    }
  };

  const handleDeleteTask = () => {
    if (selecteTodo) {
      deleteTodo(selecteTodo.id);
      setUpdateTodoModal(false);
    }
  };

  return (
    <Modal isOpen={updateTodoModal} setModal={setUpdateTodoModal}>
      <S.Container>
        <S.Header>Create Task</S.Header>
        <S.Form>
          <TextArea placeholder="" value={todoTitle} onChange={setTodoTitle} />
          <SelectBox
            placeholder=""
            options={statusList}
            selectedValue={todoStatus}
            onChange={(value: TagStatus) => setTodoStatus(value)}
          />
        </S.Form>
        <S.ButtonContainer>
          <Button
            onClick={handleUpdateTask}
            disabled={!todoTitle || !todoStatus}
            text="Task 수정하기"
            width="230px"
            height="50px"
            color={theme.color.primary20}
          />
          <Button
            onClick={handleDeleteTask}
            disabled={false}
            text="Task 삭제하기"
            width="230px"
            height="50px"
            color={theme.color.red30}
          />
        </S.ButtonContainer>
      </S.Container>
    </Modal>
  );
};

export default UpdateTodoModal;
