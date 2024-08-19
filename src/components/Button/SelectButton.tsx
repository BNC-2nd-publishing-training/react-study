// Task 생성시 상태 선택창 컴포넌트

import { useState } from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

function SelectType() {
    const [isOption, setIsOption] = useState(false);
    const onClickLabel = () => {
        setIsOption(!isOption);
    };

    const defaultText = "Task 상태를 선택해주세요";
    const [selectType, setSelectType] = useState(defaultText);

    const handleClickSelectType = (type: string) => {
        setSelectType(type);
        setIsOption(!isOption);
    };

    return (
        <div>
            <SelectTypeBox toggle={isOption}>
                <SelectTypeLabel 
                    onClick={onClickLabel} 
                    isDefault={selectType === defaultText}
                >
                    {selectType}
                </SelectTypeLabel>
                <SelectTypeUl toggle={isOption}>
                    <SelectTypeLi onClick={() => handleClickSelectType("In Review")}>In Review</SelectTypeLi>
                    <SelectTypeLi onClick={() => handleClickSelectType("In Progress")}>In Progress</SelectTypeLi>
                    <SelectTypeLi onClick={() => handleClickSelectType("Approved")}>Approved</SelectTypeLi>
                    <SelectTypeLi onClick={() => handleClickSelectType("Waiting")}>Waiting</SelectTypeLi>
                </SelectTypeUl>
            </SelectTypeBox>
        </div>
    );
}

const SelectTypeBox = styled.div<{toggle:boolean}>`
    position: relative;
    width: 480px;
    height: 50px;
    margin-top: 20px;
    padding: 15px;
    border: 2px solid ${theme.color.gray30};
`;

const SelectTypeLabel = styled.div<{isDefault: boolean}>`
    display: flex;
    font-size: 1rem;
    color: ${({ isDefault }) => (isDefault ? 'gray' : 'black')};
    cursor: pointer;
`;

const SelectTypeUl = styled.ul<{toggle:boolean}>`
    position: absolute;
    width: 480px;
    display: ${props => (props.toggle ? 'block' : 'none')};
    top: 100%;
    left: 0;
    border: 2px solid ${theme.color.gray30};
    list-style: none;
    cursor: pointer;
`;

const SelectTypeLi = styled.li`
    height: 50px;
    padding: 13px 15px;
    font-size: 1rem;
    cursor: pointer;
`;

export default SelectType;

