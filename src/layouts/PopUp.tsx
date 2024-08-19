import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import AddPop from '@/components/AddPop';
import { PopupProps } from '@/utils/interfaces/PopupType';

const Popup: React.FC<PopupProps> = ({ onClose, setTodos }) => {
    return (
        <>
            <PopUpOverlay aria-label="Close popup" />
            <PopUpBox role="dialog" aria-labelledby="popup-title">
                <AddPop onClose={onClose} setTodos={setTodos} />
                {/* <EditPop onClose={onClose} /> */}
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

export default Popup;
