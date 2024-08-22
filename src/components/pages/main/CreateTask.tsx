import { GeneralButton, Modal, Select, TextArea } from "@/components/common";
import { ListStatusType } from "@/utils/interfaces/ListStatusType";
import { ITodoListType } from "@/utils/interfaces/TodoListType";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const selectStatus: ListStatusType[] = [
  "Approved",
  "In progress",
  "In review",
  "Waiting",
];

interface ICreateTaskProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todoList: ITodoListType[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodoListType[]>>;
}

const CreateTask = ({
  isOpen,
  setIsOpen,
  todoList,
  setTodoList,
}: ICreateTaskProps) => {
  const [statusValue, setStatusValue] = useState<ListStatusType>("");
  const [label, setLabel] = useState<string>("");

  const onChangeLabel = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setLabel(value);
  };

  const addTodo = () => {
    if (!label) alert("Task 제목을 입력해주세요");
    else if (!statusValue) alert("Task의 상태를 선택해주세요");
    else {
      setTodoList([
        ...todoList,
        { label, status: statusValue, isChecked: false },
      ]);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setStatusValue("");
    setLabel("");
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Modal title="Create Task" setIsOpen={setIsOpen}>
          <Container>
            <InputForm>
              <TextArea
                placeholder="Task 제목을 입력해주세요"
                value={label}
                onChange={onChangeLabel}
              />
              <Select
                defaultText="Task의 상태를 선택해주세요"
                options={selectStatus}
                value={statusValue}
                setValue={setStatusValue}
              />
            </InputForm>
            <GeneralButton onClick={addTodo}>Task 추가하기</GeneralButton>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default CreateTask;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
