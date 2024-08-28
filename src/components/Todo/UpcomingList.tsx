import styled from "@emotion/styled";
import Todos from "./Todos";
import { theme } from "@/styles/theme";
import { TodoProps } from "@/utils/interfaces/TodoProps";

const UpCommingList = ({ todos = [], onClick }: TodoProps) => {
    return(
        <div>
            <Text>UpComming Task</Text>
            <TodoBox>
                {todos.slice().reverse().map((todo, index) => (
                    <Todos
                        key={index}
                        onClick={onClick}
                        text={todo.text}
                        status={todo.status}
                    />
                ))}
            </TodoBox>
        </div>
    );
};

const TodoBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    margin-top: 40px;
`;


const Text = styled.h1`
    color: ${theme.color.gray60};
    font-size: ${theme.font.titleMedium.fontSize};
    font-weight: ${theme.font.titleMedium.fontWeight};
`;

export default UpCommingList;