import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import EditBtn from '@/components/EditBtn';
import { PopupProps } from '@/utils/interfaces/PopupType';

const AddPop: React.FC<PopupProps> = ({ onClose }) => {
    const [selectedTag, setSelectedTag] = useState<string>('Task의 상태를 선택해주세요');
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const tagOptions = [
        { value: 'todo', label: 'To Do' },
        { value: 'in-progress', label: 'In Progress' },
        { value: 'done', label: 'Done' }
    ];

    const handleTagClick = (value: string, label: string) => {
        setSelectedTag(label);
        setIsDropdownOpen(false);
    };

    return (
        <AddPopStyle>
            <EditBtn onClick={onClose} aria-label="Close popup" />
            <Input>
                <h1 id="popup-title">Create Task</h1>
                <InputTitle
                    type="text"
                    placeholder="Task 제목을 입력해주세요"
                    aria-label="Task Title"
                />
                <DropdownContainer>
                    <DropdownButton
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        isPlaceholder={selectedTag === 'Task의 상태를 선택해주세요'}
                        isDropdownOpen={isDropdownOpen}
                    >
                        {selectedTag}
                    </DropdownButton>
                    {isDropdownOpen && (
                        <DropdownMenu>
                            {tagOptions.map(option => (
                                <DropdownItem
                                    key={option.value}
                                    onClick={() => handleTagClick(option.value, option.label)}
                                >
                                    {option.label}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    )}
                </DropdownContainer>
            </Input>
            <AddTaskButton>Task 추가하기</AddTaskButton>
        </AddPopStyle>
    );
};

const AddPopStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vh;
    h1{
        font-size: ${theme.font.titleMedium.fontSize};
        font-weight: ${theme.font.titleMedium.fontWeight};
    }
`;

const InputTitle = styled.textarea`
    width: 100%;
    height: 15vh;
    padding: 0.7rem;
    border: 1px solid ${theme.color.gray40};
    border-radius: 4px;
    resize: none;
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};
    line-height: 1.5;
    
    &::placeholder {
        color: ${theme.color.gray60};
    }

    &:focus {
        outline: none;
        border-color: ${theme.color.primary};
    }
`;

const DropdownContainer = styled.div`
    position: relative;
    width: 100%;
`;

interface DropdownButtonProps {
    isPlaceholder: boolean;
}

const DropdownButton = styled.button<DropdownButtonProps>`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${theme.color.gray40};
    border-radius: 4px 4px ${({ isDropdownOpen }) => isDropdownOpen ? '0 0'  : '4px 4px'};
    background-color: ${theme.color.white};
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};
    text-align: left;
    color: ${({ isPlaceholder }) => isPlaceholder ? theme.color.gray60 : theme.color.black};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${theme.color.white};
    border: 1px solid ${theme.color.gray40};
    border-top: none;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
`;

const DropdownItem = styled.div`
    padding: 0.7rem;
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};  
    cursor: pointer;
    &:hover {
        background-color: ${theme.color.gray20};
    }
`;

const AddTaskButton = styled.button`
    width: 100%;
    padding: 0.75rem 2rem;
    background-color: ${theme.color.primary20};
    color: ${theme.color.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};  

    &:hover {
        background-color: ${theme.color.primary30};
    }

    &:focus {
        outline: 2px solid ${theme.color.primary};
    }
`;

export default AddPop;
