// Task 타입 선택 버튼

import { useState } from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

import { SelectButtonProps } from "@/utils/interfaces/SelectButtonProps";

const SelectButton = ({ selectedType, setSelectedType } : SelectButtonProps) => {
    const [isTypeOpen, setIsTypeOpen] = useState<boolean>(false);
    const Types = ["In Review", "In Progress", "Approved", "Waiting"];

    const toggleTypes = () => {
        setIsTypeOpen(!isTypeOpen);
    };

    const handleSelectType = (type: string) => {
        setSelectedType(type);
        setIsTypeOpen(false);
    };

    return (
        <Container>

            <TypeLabel onClick={toggleTypes}>
                {selectedType || "Task 상태를 선택해주세요"}
            </TypeLabel>

            {isTypeOpen && (
                <TypesList>
                    {Types.map(type => (
                        <TypeItem key={type} onClick={() => handleSelectType(type)}>
                            {type}
                        </TypeItem>
                    ))}
                </TypesList>
            )}

        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 480px;
    height: 50px;
    border: 2px solid ${theme.color.gray30};
    border-radius: 5px 5px 0 0;
    margin-top: 20px;
    padding: 15px;
`;

const TypeLabel = styled.div`
    font-size: ${theme.font.textMedium.fontSize};
    color: gray;
    cursor: pointer;
`;

const TypesList = styled.ul`
    position: absolute;
    width: 480px;
    top: 100%;
    right: -0.5%;
    border: 2px solid ${theme.color.gray30};
    border-radius: 0 0 5px 5px;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: white;
    cursor: pointer;
`;

const TypeItem = styled.li`
    height: 50px;
    padding: 13px 15px;
    font-size: ${theme.font.textMedium.fontSize};
    cursor: pointer;

    &:hover {
        background-color: ${theme.color.gray10};
    }
`;

export default SelectButton;