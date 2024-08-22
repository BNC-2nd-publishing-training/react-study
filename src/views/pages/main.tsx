import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import 'bootstrap-icons/font/bootstrap-icons.css';

import CreateTaskModal from "@/components/Modal/CreateTaskModal";
import TypeTab from "@/components/Tab/TypeTab";
import { TaskProvider } from "@/components/Modal/CreateTask";

import WaitingTask from "@/components/Task/WaitingTask";

// import List from "@/components/Checkbox/CheckboxList";
 
function Main() {

    return (
        <Container>
            <TaskContainer>
                <TaskProvider>
                    <CreateTaskModal />
                    <TypeTab />
                </TaskProvider>
                <WaitingTask />
            </TaskContainer>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${theme.color.gray30};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TaskContainer = styled.div`
    background-color: ${theme.color.white};
    width: 517px;
    height: 840px;
    border-radius: 10px;
`;

export default Main;