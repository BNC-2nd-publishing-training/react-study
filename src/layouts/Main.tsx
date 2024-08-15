import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Tab from "@/components/Tab";
import TodoList from "@/components/TodoList";

const Main = () => {
    const [selectedTab, setSelectedTab] = useState('All');

    const handleTabSelect = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <MainStyle>
            <Tab onTabSelect={handleTabSelect} />
            <ScrollBox>
                <TodoList selectedTab={selectedTab} />
            </ScrollBox>
        </MainStyle>
    );
};

const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    h1 {
        font-size: ${theme.font.titleLarge.fontSize};
        font-weight: ${theme.font.titleMedium.fontWeight};
    }
`;

const ScrollBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`;

export default Main;
