import React, { useState } from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface SelectBoxProps {
    selectedType: string;
    setSelectedType: (type: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ selectedType, setSelectedType }) => {
    const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false);
    const options = ["In Review", "In Progress", "Approved", "Waiting"];

    const toggleOptions = () => {
        setIsOptionOpen(!isOptionOpen);
    };

    const handleSelectType = (type: string) => {
        setSelectedType(type);
        setIsOptionOpen(false);
    };

    return (
        <SelectBoxContainer>
            <SelectBoxLabel onClick={toggleOptions}>
                {selectedType || "Task 상태를 선택해주세요"}
            </SelectBoxLabel>
            {isOptionOpen && (
                <OptionsList>
                    {options.map(option => (
                        <OptionItem key={option} onClick={() => handleSelectType(option)}>
                            {option}
                        </OptionItem>
                    ))}
                </OptionsList>
            )}
        </SelectBoxContainer>
    );
};

const SelectBoxContainer = styled.div`
    position: relative;
    width: 480px;
    height: 50px;
    border: 2px solid ${theme.color.gray30};
    margin-top: 20px;
    padding: 15px;

    border-radius: 5px 5px 0 0;
`;

const SelectBoxLabel = styled.div`
    font-size: ${theme.font.textMedium.fontSize};
    color: gray;
    cursor: pointer;
`;

const OptionsList = styled.ul`
    position: absolute;
    width: 480px;
    top: 100%;
    right: -0.5%;
    border: 2px solid ${theme.color.gray30};
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: white;
    cursor: pointer;

    border-radius: 0 0 5px 5px;
`;

const OptionItem = styled.li`
    height: 50px;
    padding: 13px 15px;
    font-size: ${theme.font.textMedium.fontSize};
    cursor: pointer;

    &:hover {
        background-color: ${theme.color.gray10};
    }
`;

export default SelectBox;