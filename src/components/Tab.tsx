import { useState } from "react";
import styled from "@emotion/styled";
import Reset_Center from "@/styles/reset-center";
import { theme } from "@/styles/theme";
import BadgeTitleProps from "@/utils/interfaces/BadgeTitleProps";
import TabListProps from "@/utils/interfaces/TabListProps";

const TabList = ({ onTabSelect, todoCounts }: TabListProps) => {
    const [selectedTab, setSelectedTab] = useState('All');
    const menu = ['All', 'In Review', 'In Progress', 'Approved'];

    const handleTabClick = (tab: string) => {
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
                    <div>
                        {index === 0 && <span>{todoCounts}</span>}
                        <p>{menu}</p>
                    </div>
                </BadgeTitle>
            ))}
        </TabContainer>
    );
};

const TabContainer = styled(Reset_Center.withComponent('div'))`
    justify-content: left;
    box-sizing: border-box;
    margin: 1vw;
`;

const BadgeTitle = styled(Reset_Center.withComponent('button'))<BadgeTitleProps>`
    width: 7vw;
    box-sizing: border-box;
    box-shadow: ${({ active }) => active ? `inset 0px -1px 0px 0px ${theme.color.primary20}` : 'none'};
    white-space: nowrap;
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};
    cursor: pointer;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 2vw;
        color: ${({ active }) => active ? theme.color.black : theme.color.gray50};

        span {
            padding: 0 1vh;
            border-radius: 10px;
            background-color: ${theme.color.primary10};
            color: ${theme.color.primary20};
        }
    }
`;

export default TabList;
