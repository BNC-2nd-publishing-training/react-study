// 유형별 Task 확인 Tab 컴포넌트 (기능 완성)
// 피그마 확인해서 부족한 부분 CSS 수정하기

import { useState } from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const Tab = () => {
    const [currentTab, clickTab] = useState<number>(0);

    const TypeArr = [
        {name: 'All', content: 'All Task'},
        {name: 'InReview', content: 'In Review Task'},
        {name: 'InProgress', content: 'In Progress Task'},
        {name: 'Waiting', content: 'Waiting Task'}
    ];

    const selectTypeHandler = (index: number) => {
        clickTab(index);
    };

    return (
        <div>
            <TypeTab>
                {TypeArr.map((el, index) => (
                    <li className={index === currentTab ? "subType focused" : "subType"}
                    onClick={() => selectTypeHandler(index)}>{el.name}</li>
                ))}
            </TypeTab>

            <Desc>
                <p>{TypeArr[currentTab].content}</p>
            </Desc>
        </div>
    );
};

const TypeTab = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -143%;
    margin-bottom: 10%;
    background-color: white;
    color: rgb(232, 234, 237);

    .subType {
        width: calc(100% / 4);
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        font-size: 15px;
        cursor: pointer;
    }

    .focused {
        border-bottom: 1px solid ${theme.color.primary20};
        color: rgb(21,20,20);
    }
`;

const Desc = styled.div`
    text-align: center;
`;

export default Tab;