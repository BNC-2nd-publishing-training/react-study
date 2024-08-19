import { useState } from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Checkbox from "@/components/Checkbox/Checkbox"; // 올바른 경로로 조정

const Tab = () => {
    const [currentTab, setCurrentTab] = useState<number>(0);
    const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({}); // 체크 상태 저장

    const TypeArr = [
        { name: 'All', content: '모든 작업', checklist: ['작업 1', '작업 2', '작업 3'] },
        { name: 'In Review', content: '검토 중인 작업', checklist: ['검토 중 작업 1', '검토 중 작업 2'] },
        { name: 'In Progress', content: '진행 중인 작업', checklist: ['진행 중 작업 1', '진행 중 작업 2', '진행 중 작업 3'] },
        { name: 'Approved', content: '승인된 작업', checklist: ['승인된 작업 1', '승인된 작업 2'] }
    ];

    const selectTypeHandler = (index: number) => {
        setCurrentTab(index);
    };

    const handleCheckboxChange = (itemIndex: number) => {
        setCheckedItems(prev => ({
            ...prev,
            [itemIndex]: !prev[itemIndex]
        }));
    };

    return (
        <div>
            <TypeTab>
                {TypeArr.map((el, index) => (
                    <li
                        key={index}
                        className={index === currentTab ? "subType focused" : "subType"}
                        onClick={() => selectTypeHandler(index)}
                    >
                        {el.name}
                    </li>
                ))}
            </TypeTab>

            <Desc>
                <p>{TypeArr[currentTab].content}</p>
                <Checklist>
                    {TypeArr[currentTab].checklist.map((item, idx) => (
                        <ChecklistItem key={idx}>
                            <Checkbox 
                                checked={!!checkedItems[idx]} 
                                onChange={() => handleCheckboxChange(idx)}
                                id={`checkbox-${idx}`} // 고유한 ID 설정
                                label={item} // 체크박스 레이블 설정
                            />
                        </ChecklistItem>
                    ))}
                </Checklist>
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

const Checklist = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0;
`;

const ChecklistItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export default Tab;
