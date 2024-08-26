import styled from "@emotion/styled";
import { GeneralButton, Modal, Select, TextArea } from "@/components/common";
import { useState } from "react";
import { ListStatusType } from "@/utils/interfaces/ListStatusType";
import { ITodoListType } from "@/utils/interfaces/TodoListType";
import {
  changeTodoList,
  deleteTodoList,
} from "@/utils/functions/changeTodoList";

const selectStatus: ListStatusType[] = [
  "Approved",
  "In progress",
  "In review",
  "Waiting",
];

interface IUpdateTaskProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  status: ListStatusType;
  label: string;
  todoList: ITodoListType[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodoListType[]>>;
  idx?: number;
}
const UpdateTask = ({
  isOpen,
  setIsOpen,
  status,
  label,
  todoList,
  setTodoList,
  idx,
}: IUpdateTaskProps) => {
  const [statusValue, setStatusValue] = useState<ListStatusType>(status);
  const [labelValue, setLabelValue] = useState<string>(label);

  const onChangeLabel = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setLabelValue(value);
  };

  const updateTodo = () => {
    if (!labelValue) alert("Task 제목을 입력해주세요");
    else if (!statusValue) alert("Task의 상태를 선택해주세요");
    else {
      changeTodoList({
        todoList,
        setTodoList,
        idx,
        label: labelValue,
        status: statusValue,
      });
      setIsOpen(false);
    }
  };

  const deleteTodo = () => {
    deleteTodoList({ todoList, setTodoList, idx });
  };

  return (
    <>
      {isOpen && (
        <Modal title="Update Task" setIsOpen={setIsOpen}>
          <InputForm>
            <TextArea
              placeholder="Task 제목을 입력해주세요"
              value={labelValue}
              onChange={onChangeLabel}
            />
            <Select
              defaultText="Task의 상태를 선택해주세요"
              options={selectStatus}
              value={statusValue}
              setValue={setStatusValue}
            />
          </InputForm>
          <ButtonContainer>
            <GeneralButton isCancel onClick={deleteTodo} width="230px">
              Task 삭제하기
            </GeneralButton>
            <GeneralButton onClick={updateTodo} width="230px">
              Task 수정하기
            </GeneralButton>
          </ButtonContainer>
        </Modal>
      )}
    </>
  );
};

export default UpdateTask;

const InputForm = styled.div`
  & > textarea {
    margin-bottom: 30px;
  }
`;

const ButtonContainer = styled.div`
  > button + button {
    margin-left: 20px;
  }
`;
