import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

type DropdownProps = {
  onSelect: (value: string) => void;
  initialTag?: string;
};
const TagDropdown = ({ onSelect, initialTag }: DropdownProps) => {
  return (
    <Container>
      <TagDropdownSelect
        value={initialTag || ""}
        onChange={(e) => onSelect(e.target.value)}>
        <option disabled hidden value="">
          Task의 상태를 선택해주세요
        </option>
        <option value="In review">In review</option>
        <option value="In progress">In progress</option>
        <option value="Approved">Approved</option>
        <option value="Waiting">Waiting</option>
      </TagDropdownSelect>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 0.7%;
  margin-top: 5%;
  padding-top: 25%;
`;

const TagDropdownSelect = styled.select`
  width: 480px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid gray;
  padding: 10px;
  color: ${theme.color.gray60};
  font-size: ${theme.font.textMedium.fontSize};
  appearance: none;
  option[value=""] {
    color: gray;
  }
`;

export default TagDropdown;
