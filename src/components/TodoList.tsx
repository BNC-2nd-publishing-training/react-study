import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Todo from "./Todo";

const TodoList = ({ selectedTab }) => {
    const todos = [
        { check: true, text: "간지나게 숨쉬기", tag: "Approved" },
        { check: true, text: "간지나게 숨쉬기", tag: "In Progress" },
        { check: true, text: "간지나게 숨쉬기", tag: "In Review" },
        { check: true, text: "간지나게 숨쉬기", tag: "In Review" },
        { check: true, text: "간지나게 숨쉬기", tag: "Approved" },
        { check: true, text: "간지나게 숨쉬기", tag: "In Progress" },
        { check: false, text: "간지나게 숨쉬기", tag: "Approved" },
        { check: false, text: "간지나게 숨쉬기", tag: "In Review" },
        { check: false, text: "간지나게 숨쉬기", tag: "Approved" },
        { check: false, text: "간지나게 숨쉬기", tag: "Approved" }
    ];

    const filteredTodos = selectedTab === 'All' 
        ? todos 
        : todos.filter(todo => todo.tag === selectedTab);

    const completedTodos = filteredTodos.filter(todo => todo.check);
    const upcomingTodos = filteredTodos.filter(todo => !todo.check);

    return (
        <TodoContainer>
            <Completed>
                {completedTodos.map((todo, index) => (
                    <Todo key={index} check={todo.check.toString()} text={todo.text} tag={todo.tag} />
                ))}
            </Completed>

            <Upcoming>
                <h2>Upcoming Tasks</h2>
                {upcomingTodos.map((todo, index) => (
                    <Todo key={index} check={todo.check.toString()} text={todo.text} tag={todo.tag} />
                ))}
            </Upcoming>
        </TodoContainer>
    );
};

const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6vh;
    padding: 2vw 3vw;
`;

const Completed = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
`;

const Upcoming = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    h2 {
        color: ${theme.color.gray60};
        font-size: ${theme.font.titleMedium.fontSize};
        font-weight: ${theme.font.titleMedium.fontWeight};
    }
`;

export default TodoList;
