import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import AddPop from '@/components/AddPop';
import EditPop from '@/components/EditPop';
import { PopupProps } from '@/utils/interfaces/PopupType';

const Popup: React.FC<PopupProps> = ({ onClose }) => {

    return (
        <>
            <PopUpOverlay aria-label="Close popup" />
            <PopUpBox role="dialog" aria-labelledby="popup-title">
                <AddPop onClose={onClose}/>
                {/* <EditPop onClose={onClose}/> */}
            </PopUpBox>
        </>
    );
};

const PopUpOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.color.black};
    opacity: 0.5;
    z-index: 1;
`;

const PopUpBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35vw;
    max-width: 600px;
    height: 65vh;
    padding: 3vw;
    border-radius: 8px;
    background-color: ${theme.color.white};
    z-index: 2;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: auto;
`;

const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vh;
`;

const InputTitle = styled.textarea`
    width: 100%;
    height: 15vh;
    padding: 1rem;
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

const DropdownButton = styled.button`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${theme.color.gray40};
    border-radius: 4px;
    background-color: ${theme.color.white};
    font-size: ${theme.font.textMedium.fontSize};
    font-weight: ${theme.font.textMedium.fontWeight};
    text-align: left;
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
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
`;

const DropdownItem = styled.div`
    padding: 0.5rem;
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
    font-size: ${theme.font.titleMedium.fontSize};
    font-weight: ${theme.font.titleMedium.fontWeight};

    &:hover {
        background-color: ${theme.color.primary30};
    }

    &:focus {
        outline: 2px solid ${theme.color.primary};
    }
`;

export default Popup;
