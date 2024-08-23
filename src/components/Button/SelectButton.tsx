// Task 생성시 상태 선택창 컴포넌트

import { useState } from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { useTaskContext } from '@/components/Modal/CreateTask';

function SelectType() {
    const [isOption, setIsOption] = useState<boolean>(false);
    const { selectedType, setSelectedType } = useTaskContext();
    const options = ["In Review", "In Progress", "Approved", "Waiting"];

    const onClickLabel = () => {
        setIsOption(!isOption);
    };

    const defaultText = "Task 상태를 선택해주세요";
    const handleClickSelectType = (type: string) => {
        setSelectedType(type);
        setIsOption(!isOption);
    };

    return (
        <div>
            <SelectTypeBox toggle={isOption}>
                <SelectTypeLabel 
                    onClick={onClickLabel} 
                    isDefault={selectedType === defaultText}
                >
                    {selectedType}
                </SelectTypeLabel>
                <SelectTypeUl toggle={isOption}>
                    {options.map(option => (
                        <SelectTypeLi key={option} onClick={() => handleClickSelectType(option)}>
                            {option}
                        </SelectTypeLi>
                    ))}
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

