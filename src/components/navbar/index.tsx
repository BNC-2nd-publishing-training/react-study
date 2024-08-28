import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { Status } from "../constants";

interface NavBarProps {
  currentStatus: Status;
  onStatusChange: (status: Status) => void;
  totalCount: number;
}
interface NavButtonProps {
  active: boolean;
}

const NavBar = ({ currentStatus, onStatusChange, totalCount }: NavBarProps) => {
  const statuses: Status[] = ["All", "Approved", "InReview", "InProgress"];

  return (
    <Container>
      <Count>{totalCount}</Count>
      {statuses.map((status) => (
        <NavButton
          key={status}
          active={currentStatus === status}
          onClick={() => onStatusChange(status)}
        >
          {status}
        </NavButton>
      ))}
    </Container>
  );
};

const NavButton = styled.button<NavButtonProps>`
  width: 122px;
  height: 90px;
  color: ${({ active }) => (active ? theme.color.black : theme.color.gray50)};
  font-size: ${theme.font.textMedium.fontSize};
  font-weight: ${theme.font.textMedium.fontWeight};
  line-height: ${theme.font.textMedium.lineHeight};
  align-items: center;
  line-height: 90px;
  &:after {
    content: "";
    display: flex;
    width: 122px;
    height: 1px;
    background-color: ${(props) =>
      props.active ? theme.color.primary20 : "transparent"};
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0, 14.5px;
  height: 90px;
`;

const Count = styled.div`
  position: absolute;
  z-index: 1;
  margin-right: 420px;
  width: 29px;
  height: 20px;
  padding: 4px 8px 4px 8px;
  border-radius: 10px;
  background-color: ${theme.color.primary10};
  font-size: ${theme.font.textSmall.fontSize};
  font-weight: ${theme.font.textSmall.fontWeight};
  line-height: ${theme.font.textSmall.lineHeight};
  color: ${theme.color.primary20};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NavBar;
