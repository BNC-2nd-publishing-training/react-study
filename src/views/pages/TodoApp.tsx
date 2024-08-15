import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import TabList from "@/components/Tab/TabList";
import TodoList from "@/components/Todo/TodoList";
import UpCommingList from "@/components/Todo/UpcomingList";
import { useState } from "react";
import TitleText from "@/components/Text/TitleText";
import AddTodoBtn from "@/components/Button/AddTodoBtn";
import CreatTaskModal from "@/components/Modal/CreatTaskModal";
import EditTaskModal from "@/components/Modal/EditTaskModal";

const TodoApp = () => {
    const [ popupStatus, setPopupStatus ] = useState<null | 'create' | 'edit'>(null);

    const openPopup = (type: 'create' | 'edit') => setPopupStatus(type);
    const closePopup = () => setPopupStatus(null);

    return(
        <Container>
            <TodoBox>
                <HeaderStyle>
                    <TitleText text="Today Task"/>
                    <AddTodoBtn onClick={() => openPopup('create')}/>
                </HeaderStyle>
                <TabList/>
                <ScrollBox>
                    <TodoList onClick={() => openPopup('edit')}/>
                    <UpCommingList onClick={() => openPopup('edit')}/>
                </ScrollBox>
            </TodoBox>
            {popupStatus === 'create' && <CreatTaskModal onClose={closePopup}/>}
            {popupStatus === 'edit' && <EditTaskModal onClose={closePopup}/>}
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.color.gray30};
`;

const TodoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 80vh;
    border-radius: 10px;
    background-color: ${theme.color.white};
`;

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 50px 0 50px;
`;

const ScrollBox = styled.div`
    overflow: scroll;
    display: flex;
    flex-direction: column;
    row-gap: 90px;
    padding: 40px 50px;
`;


export default TodoApp;