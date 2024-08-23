import styled from "@emotion/styled";
import Reset_Center from "@/styles/reset-center"
import { theme } from "@/styles/theme";
import { AiOutlineClose } from "react-icons/ai";

const EditBtn = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            <AiOutlineClose />
        </Button>
    );
};

const Button = styled(Reset_Center.withComponent('button'))`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: ${theme.color.black};
    font-size: 1.5rem;
    cursor: pointer;
    
    padding: 0.5rem;
    transition: color 0.3s;

    &:hover {
        color: ${theme.color.gray80};
    }
`;

export default EditBtn;
