import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { useState } from "react";
import { UnChecked, Checked } from "@/assets/images";

interface ListProps {
  title: string;
  status: "Approved" | "InReview" | "InProgress" | "Waiting";
}

const statusColors = {
  Approved: {
    background: `${theme.color.primary10}`,
    text: `${theme.color.primary20}`,
  },
  InReview: {
    background: `${theme.color.red10}`,
    text: `${theme.color.red30}`,
  },
  InProgress: {
    background: `${theme.color.green10}`,
    text: `${theme.color.green30}`,
  },
  Waiting: {
    background: `${theme.color.gray10}`,
    text: `${theme.color.gray60}`,
  },
};
const CheckListContainer = ({ title, status }: ListProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  const { background, text } = statusColors[status];

  return (
    <Container>
      <div>
        <CheckBox onClick={handleCheckBoxChange}>
          <img src={isChecked ? Checked : UnChecked} alt="checkbox" />
        </CheckBox>
        <span>{title}</span>
      </div>
      <Tag backgroundcolor={background} color={text}>
        {status}
      </Tag>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  align-items: center;
  div {
    display: flex;
  }
`;

const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  accent-color: ${theme.color.primary20};
`;



const Tag = styled.span<{ backgroundcolor: string; color: string }>`
  display: flex;
  justify-content: center;
  width: 75px;
  height: 28px;
  padding: 7px 11px;
  gap: 10px;
  border-radius: 14px;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  color: ${({ color }) => color};
  font-size: ${theme.font.textSmall.fontSize};
  font-weight: ${theme.font.textSmall.fontWeight};
  line-height: ${theme.font.textSmall.lineHeight};
`;

export default CheckListContainer;
