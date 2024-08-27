import * as S from "./style";
import plusIcon from "@/assets/images/plus.svg";
import { CreateTaskButtonProps } from "./type";

const CreateTaskButton = ({ onClick }: CreateTaskButtonProps) => {
  return (
    <S.CreateTaskButtonContainer onClick={onClick} type="button">
      <img src={plusIcon} alt="plusIcon" />
    </S.CreateTaskButtonContainer>
  );
};

export default CreateTaskButton;
