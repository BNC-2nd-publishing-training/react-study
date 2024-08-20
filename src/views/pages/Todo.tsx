import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import NewButton from '@/components/Buttons/AddNewButton';
import CreateTaskModal from '@/components/Modal/CreateTaskModal'; 

export default function Todo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <Text1>Today Task</Text1>
            <NewButton onClick={openModal} />
            <Text2>Upcoming Task</Text2>
            {isModalOpen && (
                <CreateTaskModal onClose={closeModal} />
            )}
        </>
    );
}

const Text1 = styled.div`
    position: absolute;
    top: 14.5%;
    left: 37%;
    color: ${theme.color.black};
    font-size: ${theme.font.titleLarge.fontSize};
    font-weight: ${theme.font.titleLarge.fontWeight};
`;

const Text2 = styled.div`
    position: absolute;
    top: 60%;
    left: 37%;
    color: ${theme.color.gray60};
    font-size: ${theme.font.titleMedium.fontSize};
    font-weight: ${theme.font.titleMedium.fontWeight};
`;