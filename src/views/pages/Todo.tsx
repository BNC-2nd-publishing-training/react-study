import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import NewButton from "@/components/Buttons/AddNewButton";
import CreateTaskModal from "@/components/Modal/CreateTaskModal";
import CreateInput from "@/components/Input/TaskInput";
import TagDropdown from "@/components/Input/TagSelect";
import Checkbox from "@/components/Input/TodoInput";

export default function Todo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleTagSelect = (value: string) => {
    setSelectedTag(value);
  };

  return (
    <>
      <Text1>Today Task</Text1>
      <CreateInput />
      <TagDropdown onSelect={handleTagSelect} />
      <Checkbox />
      <NewButton onClick={openModal} />
      <Text2>Upcoming Task</Text2>
      {isModalOpen && <CreateTaskModal onClose={closeModal} />}
    </>
  );
}

const Text1 = styled.div`
  position: absolute;
  top: 14.5%;
  left: 37%;
  color: ${theme.color.black};
  font-size: ${theme.font.titleLarge.fontSize};
  font-weight: ${theme.font.titleLarge.fontWeight};
`;

const Text2 = styled.div`
  position: absolute;
  top: 60%;
  left: 37%;
  color: ${theme.color.gray60};
  font-size: ${theme.font.titleMedium.fontSize};
  font-weight: ${theme.font.titleMedium.fontWeight};
`;
