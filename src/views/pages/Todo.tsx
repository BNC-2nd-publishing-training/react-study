import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import FixedButton from "@/components/Buttons/AddButton";
import NewButton from "@/components/Buttons/AddNewButton";

export default function Todo() {
    return (
        <>
            <Text1>Today Task</Text1>
            <NewButton />
            <Text2>Upcoming Task</Text2>
        </>
    );
}
const Text1=styled.div`
    position: absolute;
    top: 14.5%;          
    left:37%;          
    color: ${theme.color.black};
    font-size: ${theme.font.titleLarge.fontSize};
    font-weight: ${theme.font.titleLarge.fontWeight};
    
`
const Text2 = styled.div`
    position: absolute;
    top: 60%;          
    left:37%;  
    color: ${theme.color.gray60};
    font-size: ${theme.font.titleMedium.fontSize};
    font-weight: ${theme.font.titleMedium.fontWeight};
`;
