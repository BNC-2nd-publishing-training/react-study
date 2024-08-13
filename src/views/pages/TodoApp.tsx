import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Header from "@/components/Header";
import TabList from "@/components/Tab/TabList";
import TodoList from "@/components/Todo/TodoList";
import UpCommingList from "@/components/Todo/UpcomingList";
import { useState } from "react";
import CreactTaskModal from "@/components/Modal/CreatTaskModal";

const TodoApp = () => {
    // const [popupVisible, setPopupVisible] = useState(false)

    // const handlePopupOpen = () => {
    //     setPopupVisible(true);
    // };
    
    //   const handlePopupClose = () => {
    //     setPopupVisible(false);
    //   };

    return(
        <Container>
            <TodoBox>
                <Header/>
                <TabList/>
                <ScrollBox>
                    <TodoList/>
                    <UpCommingList/>
                </ScrollBox>
            </TodoBox>
            {/* {popupVisible && <CreactTaskModal onClose={handlePopupClose}/>} */}
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

const ScrollBox = styled.div`
    overflow: scroll;
    display: flex;
    flex-direction: column;
    row-gap: 90px;
    padding: 40px 50px;
`;


export default TodoApp;