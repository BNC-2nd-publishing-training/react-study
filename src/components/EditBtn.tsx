import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { AiOutlineClose } from "react-icons/ai";

const EditBtn = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            <AiOutlineClose />
        </Button>
    );
};

const Button = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: ${theme.color.black};
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    transition: color 0.3s;

    &:hover {
        color: ${theme.color.gray80};
    }
`;

export default EditBtn;
