import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { useState } from "react";
import { UnChecked, Checked } from "@/assets/images";

interface ListProps {
  title: string;
  status: string;
}

const CheckListContainer = ({ title, status }: ListProps) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxChange = () => {
      setIsChecked(!isChecked);
    };

  return (
    <Container>
      <div>
        <CheckBox onClick={handleCheckBoxChange}>
        <img src={isChecked ? Checked : UnChecked} alt="checkbox" />
        </CheckBox>
        <Title>{title}</Title>
      </div>
      <Tag>{status}</Tag>
    </Container>
  );
};

  

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  align-items: center;
  div{
    display: flex;
  }
`;

const CheckBox = styled.div
`
width: 20px;  // 체크박스의 크기를 조정
  height: 20px;
  margin-right: 10px;  // 제목과의 간격 조정
  accent-color: ${theme.color.primary20}; // 체크박스 색상 (선택적)
`;

const Title = styled.div``;

const Tag = styled.span`
display: flex;
justify-content: center;
  width: 75px;
  height: 28px;
  padding: 7px 11px;
  gap: 10px;
  border-radius: 14px;
  background-color: ${theme.color.primary10};
  font-size: ${theme.font.textSmall.fontSize};
  font-weight: ${theme.font.textSmall.fontWeight};
  line-height: ${theme.font.textSmall.lineHeight};
  color: ${theme.color.primary20};
`;


export default CheckListContainer;
