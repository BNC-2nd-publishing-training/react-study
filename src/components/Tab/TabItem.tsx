import styled from "@emotion/styled";
import { TabProps } from "@/utils/interfaces/TabProps";
import { theme } from "@/styles/theme";

const TabItem = (props:TabProps) => {
    const { text, isActive = false, onClick } = props;

    return(
        <TabStyle onClick={props.onClick} isActive={isActive}>
            <AllContainer>
                {props.text === 'All' ? <NumBox>10</NumBox> : ''}
                <Menu>{props.text}</Menu>
            </AllContainer>
        </TabStyle>
    );
};

const TabStyle = styled.div<{ isActive : boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 100%;
    color: ${({isActive}) => (isActive ? theme.color.black : theme.color.gray50)};
    border-bottom: 1px solid ${({isActive}) => (isActive ? theme.color.primary20 : theme.color.white)};
`;

const AllContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
`

const NumBox = styled.div`
    height: fit-content;
    padding: 3px 8px;
    border-radius: 10px;
    font-size: ${theme.font.textSmall.fontSize};
    color: ${theme.color.primary20};
    background-color: ${theme.color.primary10};
`;

const Menu = styled.p`
    font-size: ${theme.font.textMedium.fontSize}
`;

export default TabItem;