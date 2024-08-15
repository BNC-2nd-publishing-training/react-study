import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const TabList = ({ onTabSelect }) => {
    const [selectedTab, setSelectedTab] = useState('All');
    const menu = ['All', 'In Review', 'In Progress', 'Approved'];

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        onTabSelect(tab);
    };

    return (
        <TabContainer>
            {menu.map((menu, index) => (
                <BadgeTitle 
                    key={index} 
                    onClick={() => handleTabClick(menu)}
                    active={selectedTab === menu}
                >
                    <div className="div">
                        {index === 0 && <span>1</span>}
                        <p>{menu}</p>
                    </div>
                </BadgeTitle>
            ))}
        </TabContainer>
    );
};

const TabContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    box-sizing: border-box;
    margin: 1vw;
`;

const BadgeTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 7vw;
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};
    white-space: nowrap;
     box-shadow: ${({ active }) => active ? `inset 0px -1px 0px 0px ${theme.color.primary20}` : 'none'};
    cursor: pointer;
    
    .div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 2vw;
        color: ${({ active }) => active ? theme.color.black : theme.color.gray50};
    }
`;

export default TabList;
