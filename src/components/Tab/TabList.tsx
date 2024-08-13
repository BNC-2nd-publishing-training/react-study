import styled from "@emotion/styled";
import TabItem from "./TabItem";
import { useState } from "react";
import { TabProps } from "@/utils/interfaces/TabProps";

const TabList = (props:TabProps) => {
    const menu = ['All', 'In Review', 'In Progress', 'Approved'];

    const [selectTab, setSelectTab] = useState(0);

    return (
        <TabContainer>
            {menu.map((menu, index) => (
                <TabItem 
                    text={menu} 
                    key={index}
                    isActive={index === selectTab}
                    onClick={() => setSelectTab(index)}/>
            ))}
        </TabContainer>
    );
};

const TabContainer = styled.div`
    display: flex;
    padding: 0 15px;
`;

export default TabList;
